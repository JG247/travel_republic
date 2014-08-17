/**
 * Created with JetBrains PhpStorm.
 * User: James
 * Date: 10/08/14
 * Time: 10:40
 * To change this template use File | Settings | File Templates.
 */
define([
    'angular',
    'angular-route',
    'jQuery'

], function ( angular, ngRoute, $ ) {
    function HotelsCtrl(app, dataPath){
        this.app = app,
            $jq = jQuery.noConflict();
        app.controller('HotelsCtrl', function($scope, $http, $filter){
            $http.get(dataPath).success(function(data) {
                $scope.data = data.Establishments;

                $scope.resetFilters = function() {

                    $scope.trpMin = -10000;
                    $scope.minUserRating = -1;
                    $scope.minCost = 0;
                    document.getElementById("selectHotel").selectedIndex = 0;
                    document.getElementById("selectStar").selectedIndex = 0;
                    $scope.Star = "";
                    $scope.HotelName = "";
                };

                $scope.currentPage = 0;
                $scope.pageSize = 10;
                $scope.Math=Math;

                $scope.$watch('searchText', function (newData) {
                    //$scope.currentPage = 0;
                    $scope.filteredDestinations = $filter('filter')($scope.data, $scope.searchText);
                    $scope.noOfPages = $scope.filteredDestinations.length / $scope.pageSize;
                    $scope.pagesRounded = Math.ceil($scope.noOfPages);
                });

                $scope.$watch('HotelName', function (newData) {
                    //$scope.currentPage = 0;
                    $scope.filteredDestinations = $filter('filter')($scope.data, $scope.HotelName);
                    $scope.noOfPages = $scope.filteredDestinations.length / $scope.pageSize;
                    $scope.pagesRounded = Math.ceil($scope.noOfPages);
                });

                $scope.$watch('Star', function (newData) {
                    //$scope.currentPage = 0;
                    $scope.filteredDestinations = $filter('filter')($scope.data, $scope.Star);
                    $scope.noOfPages = $scope.filteredDestinations.length / $scope.pageSize;
                    $scope.pagesRounded = Math.ceil($scope.noOfPages);

                    $scope.starData = $filter('filter')($scope.data, $scope.Star);
                });

                $scope.trpMin = -10000;
                $scope.minUserRating = -1;
                $scope.minCost = 0;

                $scope.$watch('[HotelName,Star,trpMin,minUserRating,minCost]',function(nv,ov){
                    function TrpRating () {
                        $scope.TrpArray = [];
                        $scope.NewFilteredData = [];
                        for (var i = 0; i < $scope.filteredDestinations.length; i++) {
                            if ( ($scope.filteredDestinations[i].TrpRating > $scope.trpMin) && ($scope.filteredDestinations[i].UserRating > $scope.minUserRating) && ($scope.filteredDestinations[i].MinCost > $scope.minCost)) {
                                $scope.TrpArray.push($scope.filteredDestinations[i].TrpRating);
                                $scope.NewFilteredData.push($scope.filteredDestinations[i]);
                            }
                        }
                    }
                    TrpRating();
                });

                $scope.orderByStarAsc = function(){
                    $scope.filteredDestinations = $filter('orderBy')($scope.filteredDestinations, 'Stars', true);
                };
                $scope.orderByStarDesc = function(){
                    $scope.filteredDestinations = $filter('orderBy')($scope.filteredDestinations, 'Stars');
                };
                $scope.orderByDistanceAsc = function(){
                    $scope.filteredDestinations = $filter('orderBy')($scope.filteredDestinations, 'Distance', true);
                };
                $scope.orderByDistanceDesc = function(){
                    $scope.filteredDestinations = $filter('orderBy')($scope.filteredDestinations, 'Distance');
                };
                $scope.orderByMinCostAsc = function(){
                    $scope.filteredDestinations = $filter('orderBy')($scope.filteredDestinations, 'MinCost', true);
                };
                $scope.orderByMinCostDesc = function(){
                    $scope.filteredDestinations = $filter('orderBy')($scope.filteredDestinations, 'MinCost');
                };
                $scope.orderByTrpRatingAsc = function(){
                    $scope.filteredDestinations = $filter('orderBy')($scope.filteredDestinations, 'TrpRating', true);
                };
                $scope.orderByTrpRatingDesc = function(){
                    $scope.filteredDestinations = $filter('orderBy')($scope.filteredDestinations, 'TrpRating');
                };
                $scope.orderByUserRatingAsc = function(){
                    $scope.filteredDestinations = $filter('orderBy')($scope.filteredDestinations, 'UserRating', true);
                };
                $scope.orderByUserRatingDesc = function(){
                    $scope.filteredDestinations = $filter('orderBy')($scope.filteredDestinations, 'UserRating');
                };
            });
        });
    }
    return HotelsCtrl;
});