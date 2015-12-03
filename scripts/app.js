(function(){
    "use strict";
    define([
        'jQuery',
        'Underscore',
        'Backbone',
        'models/usersModel',
        'collections/usersCollection',
        'views/usersCollectionView'
    ], function ($, _, Backbone, UserModel, UsersCollection, UsersCollectionView) {
        var initialize = function () {
            var coll = new UsersCollection();
            var collectionObject =  coll.getResult();
            console.log(collectionObject.models);
            /*
             _.each(collectionObject, function(value,key,list){
             //collectionObject.push(value.attributes);
             console.log(list);
             // console.log(key);
             });
             */
            var collView = new UsersCollectionView();
            //collView.render(coll.getCollection());

            $('#users-view-template').html(collView.el);
            //console.log(collView);
            // console.log(collView.el);

        };

        return {
            initialize: initialize
        };
    });
})();

