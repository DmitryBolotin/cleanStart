define([
    'jQuery',
    'Underscore',
    'Backbone'
], function($, _, Backbone){
    var UsersModel = Backbone.Model.extend({
       // urlRoot: 'https://api.github.com/users/octocat'
    });
   // console.log("usersModel");
    return UsersModel;
});
