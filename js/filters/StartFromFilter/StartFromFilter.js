/**
 * Created with JetBrains PhpStorm.
 * User: James
 * Date: 12/08/14
 * Time: 05:44
 * To change this template use File | Settings | File Templates.
 */
define([
    'angular',
    'angular-route',
    'jQuery',
    'bootstrap'

], function ( angular, ngRoute,  $, bootstrap ) {
    function StartFromFilter (app){
        this.app = app;
        //We already have a limitTo filter built-in to angular,
        //let's make a startFrom filter
        app.filter('startFrom', function() {
            return function(input, start) {
                start = +start; //parse to int
                return input.slice(start);
            }
        });
    }

    return StartFromFilter;
});