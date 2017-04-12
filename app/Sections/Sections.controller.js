(function() {
  'use strict';

  angular
    .module('app.Sections')
    .controller('SectionsController', SectionsController);

  SectionsController.$inject = ['$scope','$state','$stateParams','$location','$anchorScroll','newsTypeService','HOST'];

  function SectionsController($scope,$state,$stateParams,$location,$anchorScroll,newsTypeService,HOST) {
    $scope.page = 0;
    $scope.stories = [];
    $scope.$watch(function () { return newsTypeService.getCurrentType(); }, function (newValue, oldValue) {
       if (newValue != null) {
         $scope.type = newValue;
         $scope.stories = [];
         $scope.page = 0;
         $scope.loadMore();

       }
   }, true);

   $scope.loadMore =  function(){
     LoadNews($scope.type,$scope.page)
   }

   function LoadNews(type,page){
     $.post(
       HOST+'index.php/News/GetSectionNews',
       {
         'page' : page,
         'section' : $stateParams.section,
         'type' : type
       },
       function(data,status){
         if(data && status == 'success'){
           var Stories = JSON.parse(data);
           if(Stories[0]){
             for (var Story of Stories) {
               $scope.stories.push(Story);
             }
             $scope.page = $scope.page+10;
             $scope.$digest();

           }
         }
       }
     );

   }
  }



})();
