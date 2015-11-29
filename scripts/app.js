define([
    'jQuery',
    'Underscore',
    'Backbone',
    'models/usersModel',
    'collections/usersCollection',
    'views/usersCollectionView'
], function ($, _, Backbone, UserModel, UsersCollection, UsersCollectionView) {
    var initialize = function () {
        var collView = new UsersCollectionView();
        $('#users-view-template').html(collView.el);
        console.log(collView.el);
    };

    return {
        initialize: initialize
    };
});
