(function(){
    "use strict";
    define([
        'jQuery',
        'Underscore',
        'Backbone',
        'models/usersModel'
    ], function($, _, Backbone,UserModel){
        var UsersCollection = Backbone.Collection.extend({
            model: UserModel,

            initialize: function () {
                return this;
            },
            // url: 'http://backbone-beginner.herokuapp.com/users',
            url: 'https://api.github.com/users/octocat/repos',

            getResult: function() {
                this.fetch({
                    success: function () {
                        return this;
                    }});
                return this;
            }
        });
        return   UsersCollection;
    });

})();
