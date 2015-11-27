define([
    'jQuery',
    'Underscore',
    'Backbone',
    'models/usersModel',
    'collections/usersCollection',
    'text!templates/usersTemplates.html'
], function ($, _, Backbone, UserModel, UsersCollection, Templates) {
    var UsersCollectionView = Backbone.View.extend({
        el: '.templateInsert',
        template: _.template(Templates),
        initialize: function () {
            this.render();
            return this;
        },

        render: function () {
            var that = this;
            var userModel = new UserModel();
            var users_collection = new UsersCollection() ;
            var users = users_collection.fetch({
                    success: function (userModel,collection) {
                       // console.log(userModel.get('id'));
                        /*
                        _.each(userModel.models,function(item){
                            var some = item.get('id');
                            console.log(some)
                        });
                        */
                        that.$el.html(that.template({
                            users: userModel,
                            _:_
                        }));
                        /*
                        that.$el.html(that.template({
                            usersId: userModel.models[0],
                            usersLogin: userModel.models[0]
                        }));
                        */
                        return collection;
                    }});
            return this;
        }
    });

    return UsersCollectionView;
});



