(function(){
    "use strict";
    define([
        'jQuery',
        'Underscore',
        'Backbone',
        'models/usersModel',
        'collections/usersCollection',
        'text!templates/usersTemplates.html'
    ], function ($, _, Backbone, UsersModel, UsersCollection, Templates) {
        var UsersCollectionView = Backbone.View.extend({
            el: '#users-view-template',
            //   collection: UsersCollection,
            template: _.template(Templates),
            initialize: function () {
                return this;
            },
            render: function (usersCollection) {
                this.$el.html(this.template({
                    users: usersCollection
                }));
                return this;
            }
        });

        return UsersCollectionView;
    });
})();




