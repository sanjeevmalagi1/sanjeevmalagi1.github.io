(function() {
  'use strict';

  angular
    .module('app.Directives')
    .directive('ynStory', ynStory);

  function ynStory() {
    return {
      templateUrl: 'app/Directives/Story/Story.html',
      restrict: 'E',
      controller: StoryController,
      controllerAs: 'vm',
      bindToController: true
      };
  }

  StoryController.$inject = ['$scope','projectService'];

  function StoryController($scope,projectService) {
    
      $scope.setProject = function() {
        projectService.setCurrentProject(this.Project);
      }
    }

})();
