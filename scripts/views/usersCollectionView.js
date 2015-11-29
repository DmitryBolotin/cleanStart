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
        template: _.template(Templates),
        initialize: function () {
            this.render();
            return this;
        },
        render: function () {
            var that = this;
            var userModel = new UsersModel();
            var users_collection = new UsersCollection() ;
            var users = users_collection.fetch({
                    success: function (userModel,collection) {
                        that.$el.html(that.template({
                            users: userModel.models
                        }));
                        return collection;
                    }});
            return this;
        }
    });

    return UsersCollectionView;
});



