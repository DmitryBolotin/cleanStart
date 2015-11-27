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
      //  $('.page').html(collView.el);
    };

    return {
        initialize: initialize
    };
});
