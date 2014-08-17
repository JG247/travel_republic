/**
 * Created with JetBrains PhpStorm.
 * User: James
 * Date: 10/08/14
 * Time: 10:12
 * To change this template use File | Settings | File Templates.
 */
define([
    'angular',
    'angular-route'

], function ( angular, ngRoute ) {
    function HeaderCtrl(app){
        this.app = app;
        app.controller('HeaderCtrl', function($scope){
            $scope.title = "Travel Republic"
            $scope.openSortModal = function() {
                $('#sortModal').modal('show')
            }
        });
    }
    return HeaderCtrl;
});