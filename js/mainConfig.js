/**
 * Created with JetBrains PhpStorm.
 * User: James
 * Date: 10/08/14
 * Time: 08:55
 * To change this template use File | Settings | File Templates.
 */

requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.

    paths: {
        jQuery : 'jquery-1.11.1.min',
        bootstrap: 'bootstrap.min',
        angular: 'angular.min',
        app : 'app',
        domReady: 'domReady'
    },

    shim: {
        'angular' : {
            deps : ['domReady','jQuery'],
            exports: 'angular'
        },
        'angular-route' : {
            deps: ['angular']
        },
        'bootstrap' : {
            deps : ['jQuery']
        }
    }
});

define([
    'jQuery',
    'angular',
    'angular-route',
    'app',
    'domReady'
], function($, angular, ngRoute, MyApp, domReady){
    requirejs([domReady], function(){
        angular.bootstrap(document, ['MyApp','ngRoute']);
    });
});
