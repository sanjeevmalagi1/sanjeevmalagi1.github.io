(function() {
  'use strict';

  angular
    .module('app.Dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope','$state','$location','$anchorScroll','websiteService'];

  function DashboardController($scope,$state,$location,$anchorScroll,websiteService) {
    $scope.Logs = {};
    $scope.$watch(function () { return websiteService.getCurrentWebsite(); }, function (newValue, oldValue) {
       if (newValue != null) {

           newValue.map(function(data){
              GetLogs(data.APIKey)
           });

       }
   }, true);

   $scope.setToUniques =  function(){
     $scope.Logs = $scope.uniqueVisitors;
     $location.hash('Logs');
     $anchorScroll();
   }

   $scope.setToAll =  function(){
     $scope.Logs = $scope.AllLogs;
     $location.hash('Logs');
     $anchorScroll();
   }



   function GetLogs(APIKey){
     $.post(
       'http://localhost/SuperArdorAnalytics/index.php/Logger/GetLogs',
       {
         'key' : APIKey
       },
       function(data,status){
         if(data!='null' && status == 'success'){
           var Logs = JSON.parse(data);
           $scope.AllLogs =  Logs;

           var uniqueIPs = [];

          $scope.uniqueVisitors = Logs.filter(el => {
               if (uniqueIPs.indexOf(el.IP) === -1) {
                   uniqueIPs.push(el.IP);
                   return true;
               }
               return false;
           });
           $scope.Logs = $scope.AllLogs;
           $scope.$digest();

         }
       }
     );
   }

  }



})();
