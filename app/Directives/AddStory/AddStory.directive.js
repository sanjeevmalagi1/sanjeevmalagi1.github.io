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

  AddStoryController.$inject = ['$scope','$location','$anchorScroll','newsTypeService','HOST'];

  function AddStoryController($scope,$location,$anchorScroll,newsTypeService,HOST) {
    $scope.submit = function(){

          console.log($("#imgInp"));
    }

    function readURL(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              $('#image').attr('src', e.target.result);
          }

          reader.readAsDataURL(input.files[0]);
      }
  }

  $("#imgInp").change(function(){
      readURL(this);
  });
 }

})();
