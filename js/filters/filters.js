/**
 * Created with JetBrains PhpStorm.
 * User: James
 * Date: 10/08/14
 * Time: 09:03
 * To change this template use File | Settings | File Templates.
 */
define([
    'angular',
    'angular-route',
    'jQuery',
    'bootstrap',
    'filters/StartFromFilter/StartFromFilter',
    'filters/MinMaxValueFilter/MinMaxValueFilter'

], function ( angular, ngRoute,  $, bootstrap, StartFromFilter, MinMaxValueFilter  ) {
    function Filters (app){
        this.app = app;
        StartFromFilter(app);
        MinMaxValueFilter(app);
    }
    return Filters;
});