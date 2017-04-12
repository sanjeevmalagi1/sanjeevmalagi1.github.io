(function() {
  'use strict';

  angular
    .module('app.LogsInfo')
    .controller('LogsInfoURLController', LogsInfoURLController);

  LogsInfoURLController.$inject = ['$scope','$state','$stateParams','$location','$anchorScroll','websiteService','HOST'];

  function LogsInfoURLController($scope,$state,$stateParams,$location,$anchorScroll,websiteService,HOST) {
    //console.log($stateParams.URL);
    $scope.Locations = [];
    var APIKey = JSON.parse(window.localStorage.getItem("currentWebsite"))[0].APIKey;
    Load();

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

      function Load(){
        $.post(
          HOST+'index.php/Logger/GetLogs/',
          {
            'key' : APIKey,
            'URL' : $stateParams.URL
          },
          function(data,status){
            if(data!='null' && status == 'success'){
              var Logs = JSON.parse(data);
              $scope.AllLogs =  Logs;

              var uniqueIPs = [];
              var uniqueLocs = [];

             $scope.uniqueVisitors = Logs.filter(el => {
                  if (uniqueLocs.indexOf(el.Lat) === -1) {
                      uniqueLocs.push(el.Lat);
                      $scope.Locations.push({Lat:el.Lat,Lng:el.Lng});
                  }
                  if (uniqueIPs.indexOf(el.IP) === -1) {
                      uniqueIPs.push(el.IP);
                      return true;
                  }
                  return false;
              });
              $scope.Logs = $scope.AllLogs;
              $scope.$digest();
            }
          });
      }

  }

})();
