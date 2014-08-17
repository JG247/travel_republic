/**
 * Created with JetBrains PhpStorm.
 * User: James
 * Date: 12/08/14
 * Time: 05:51
 * To change this template use File | Settings | File Templates.
 */
define([
    'angular',
    'angular-route',
    'jQuery',
    'bootstrap'
], function ( angular, ngRoute,  $, bootstrap ) {
    function MinMaxValueFilter (app){
        this.app = app;
        //We already have a limitTo filter built-in to angular,
        //let's make a startFrom filter
        app.filter('minMaxValue', function() {
            return function(input, min, max, step) {
                step = (step === undefined) ? 1 : step;
                var newInput = [];
                for (input > min; input < max; input++){
                    return input;
                }
            }
        });
    }
    return MinMaxValueFilter;
});