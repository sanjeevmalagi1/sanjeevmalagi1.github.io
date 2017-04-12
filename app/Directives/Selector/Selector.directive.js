(function() {
  'use strict';

  angular
    .module('app.Directives')
    .directive('saWebsiteSelector', saWebsiteSelector);

  function saWebsiteSelector() {
    return {
      templateUrl: 'app/Directives/Selector/Selector.html',
      restrict: 'E',
      controller: SelectorController,
      controllerAs: 'vm',
      bindToController: true

      };
  }

  SelectorController.$inject = ['$scope','$location','$anchorScroll','newsTypeService','HOST'];

  function SelectorController($scope,$location,$anchorScroll,newsTypeService,HOST) {
    $scope.setType = function(type){
      newsTypeService.setCurrentType(type);
    }

    $scope.$watch(function () { return newsTypeService.getCurrentType(); }, function (newValue, oldValue) {
       if (newValue != null) {
          $scope.type = newValue;
          console.log($scope.type);
       }
   }, true);
 }

})();
