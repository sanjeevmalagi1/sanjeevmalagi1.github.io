(function() {
  'use strict';

  angular
    .module('app.Directives')
    .directive('saSidemenu', saSidemenu);

  function saSidemenu() {
    return {
      templateUrl: 'app/Directives/Sidemenu/Sidemenu.html',
      restrict: 'E',
      controller: SidemenuController,
      controllerAs: 'vm',
      bindToController: true

      };
  }

  SidemenuController.$inject = ['$scope', '$stateParams'];

  function SidemenuController($scope, $stateParams) {

  }



})();
