/**
 * Created with JetBrains PhpStorm.
 * User: James
 * Date: 10/08/14
 * Time: 09:01
 * To change this template use File | Settings | File Templates.
 */
define([
    'angular',
    'angular-route',
    'jQuery',
    'bootstrap'
], function ( angular, ngRoute,  $, bootstrap ) {
    function Routes (app){
        this.app = app;
        app.config(function($routeProvider){
            $routeProvider.when('/',
                {
                    templateUrl: 'templates/hotels.html'
                })
        });
    }
    return Routes;
});