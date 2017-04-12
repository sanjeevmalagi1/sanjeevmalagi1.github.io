(function() {
  'use strict';

  angular
    .module('app.LogsInfo')
    .controller('LogsInfoIPController', LogsInfoIPController);

  LogsInfoIPController.$inject = ['$scope','$state','$stateParams','$location','$anchorScroll','websiteService','HOST'];

  function LogsInfoIPController($scope,$state,$stateParams,$location,$anchorScroll,websiteService,HOST) {
    //console.log($stateParams.IP);

    var APIKey = JSON.parse(window.localStorage.getItem("currentWebsite"))[0].APIKey;

    $scope.Logs = {};
    $scope.$watch(function () { return websiteService.getCurrentWebsite(); }, function (newValue, oldValue) {
       if (newValue != null) {

           newValue.map(function(data){
              Load(data.APIKey);
           });

       }
   }, true);

   $scope.setToUniques =  function(){
     $scope.Logs = $scope.uniqueURLs;
     $location.hash('Logs');
     $anchorScroll();
   }

   $scope.setToAll =  function(){
     $scope.Logs = $scope.AllLogs;
     $location.hash('Logs');
     $anchorScroll();
   }


      function Load(APIKey) {
        $.post(
          HOST+'index.php/Logger/GetLogs/',
          {
            'key' : APIKey,
            'IP' : $stateParams.IP
          },
          function(data,status){
            if(data!='null' && status == 'success'){
              var Logs = JSON.parse(data);
              $scope.AllLogs =  Logs;
              var uniqueURLs = [];

              $scope.uniqueURLs = Logs.filter(el => {
                   if (uniqueURLs.indexOf(el.URL) === -1) {
                       uniqueURLs.push(el.URL);
                       return true;
                   }
                   return false;
               });

              $scope.Logs = $scope.AllLogs;
              $scope.$digest();
              //console.log($scope.Log);
            }
          })
      }


  }

})();
