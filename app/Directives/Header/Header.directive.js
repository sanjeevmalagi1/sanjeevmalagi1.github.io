(function() {
  'use strict';

  angular
    .module('app.Directives')
    .directive('saHeader', saHeader);

  function saHeader() {
    return {
      templateUrl: 'app/Directives/Header/Header.html',
      restrict: 'E',
      controller: HeaderController,
      controllerAs: 'vm',
      bindToController: true
      };
  }

  HeaderController.$inject = ['$scope', '$state','websiteService'];

function HeaderController($scope, $state,websiteService) {

    $scope.logout = function(){
      $scope.isCollapsed = false;
      window.localStorage.removeItem("userId");
      window.localStorage.removeItem("userEmail");
      websiteService.resetCurrentWebsite();
      $state.go('LogIn');
    }


}



})();
