/**
 * Created with JetBrains PhpStorm.
 * User: James
 * Date: 10/08/14
 * Time: 09:00
 * To change this template use File | Settings | File Templates.
 */
define([
    'angular',
    'angular-route',
    'jQuery',
    'bootstrap',
    'controllers/controllers',
    'routes/routes',
    'directives/directives',
    'filters/filters'

], function ( angular, ngRoute,  $, bootstrap, Controllers, Routes, Directives, Filters ) {

    function StartApp(){
        var app =  angular.module('MyApp', ['ngRoute']),
            dataPath = "js/data/hotels.json";

        Controllers(app, dataPath);
        Routes(app);
        Directives(app);
        Filters(app);

        return app;
    }
    StartApp();
});