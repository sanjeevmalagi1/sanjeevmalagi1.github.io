(function() {
  'use strict';

  angular
    .module('app.LogsInfo')
    .controller('LogsInfoController', LogsInfoController);

  LogsInfoController.$inject = ['$scope','$state','$stateParams','websiteService','HOST'];

  function LogsInfoController($scope,$state,$stateParams,websiteService,HOST) {
    var APIKey = JSON.parse(window.localStorage.getItem("currentWebsite"))[0].APIKey;
    $.post(
      HOST+'index.php/Logger/GetLog/',
      {
        'key' : APIKey,
        'ID' : $stateParams.ID
      },
      function(data,status){
        if(data!='null' && status == 'success'){
          var Log = JSON.parse(data);
          $scope.Log =  Log;
          $scope.$digest();
        }
      });

  }

})();
