(function(){
    "use strict";
    require.config({
        paths: {
            jQuery: 'libs/jquery/dist/jquery',
            Underscore: 'libs/underscore/underscore',
            Backbone: 'libs/backbone/backbone',
            text: 'libs/text/text',
            models: 'models',
            collections: 'collections',
            templates: 'templates',
            views:'views'
        },
        shim: {
            'jQuery': {
                exports: '$'
            },

            'Backbone': {
                deps   : ['Underscore', 'jQuery'],
                exports: 'Backbone'
            },

            'Underscore': {
                exports: '_'
            }
        }
    });
    require([
        'app'

    ], function(App){
        //  console.log("initialize main");
        App.initialize();
    });
})();

