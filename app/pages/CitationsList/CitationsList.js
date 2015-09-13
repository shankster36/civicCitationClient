'use strict';
var myApp = angular.module('myApp');

myApp.controller('CitationsList', ['$scope', '$state', '$stateParams', 'civicCitationBackendService',
function($scope, $state, $stateParams, civicCitationBackendService) {
    console.log($stateParams.citation);
    civicCitationBackendService.getCitationByCreds().then(function(data) {
        $scope.citationInfo = data;
      });
}]);
