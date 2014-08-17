/**
 * Created with JetBrains PhpStorm.
 * User: James
 * Date: 10/08/14
 * Time: 09:05
 * To change this template use File | Settings | File Templates.
 */
define([
    'angular',
    'angular-route'

], function ( angular, ngRoute) {
    function Directives (app){
        this.app = app;
        app.directive('mainHeader', function(){
            return {
                restrict: 'E',
                controller: 'HeaderCtrl',
                templateUrl: 'templates/header.html'
            }
        });
        app.directive('mainFooter', function(){
            return {
                restrict: 'E',
                controller: 'footerCtrl',
                templateUrl: 'templates/footer.html'
            }
        });
    }

    return Directives;
});