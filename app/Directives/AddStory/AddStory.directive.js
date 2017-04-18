(function() {
  'use strict';

  angular
    .module('app.Directives')
    .directive('ynAddStory', ynAddStory);

  function ynAddStory() {
    return {
      templateUrl: 'app/Directives/AddStory/AddStory.html',
      restrict: 'E',
      controller: AddStoryController,
      controllerAs: 'vm',
      bindToController: true

      };
  }

  AddStoryController.$inject = ['$scope','$location','$anchorScroll','projectService'];

  function AddStoryController($scope,$location,$anchorScroll,projectService) {

    $scope.$watch(function () { return projectService.getCurrentProject(); }, function (newValue, oldValue) {
         if (newValue != null) {
            console.log(newValue);
            $scope.projectDetails = newValue;
            //$scope.Images = projectService.getProjectImages(newValue.$id);
            projectService.getProjectImages(newValue.$id).$loaded(function(images){
                $scope.Images = images;
            });

         }
     }, true);


  }

})();
