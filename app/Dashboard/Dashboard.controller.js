(function() {
  'use strict';

  angular
    .module('app.Dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope','$state','$location','$anchorScroll','newsTypeService','HOST'];

  function DashboardController($scope,$state,$location,$anchorScroll,newsTypeService,HOST) {
    $scope.stories = [];
    $scope.page = 0;
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
       HOST+'index.php/News/GetAllNews',
       {
         'page' : page,
         'type' : type
       },
       function(data,status){
         if(data && status == 'success'){
           var Stories = JSON.parse(data);

           for (var Story of Stories) {
             $scope.stories.push(Story);
           }
           $scope.page = $scope.page+10;
           $scope.$digest();
         }
       }
     );

   }

  }




})();
