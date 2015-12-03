(function(){
    "use strict";
    define([
        'jQuery',
        'Underscore',
        'Backbone'
    ], function($, _, Backbone){
        "use strict";
        window.UsersModel = Backbone.Model.extend({
            // urlRoot: 'https://api.github.com/users/octocat'
        });
        // console.log("usersModel");
        return UsersModel;
    });
})();

