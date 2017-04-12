(function() {
  'use strict';

  angular
    .module('app.WebSite')
    .controller('AddWebsiteController', AddWebsiteController);

  AddWebsiteController.$inject = ['$scope','$state','websiteService','HOST'];

  function AddWebsiteController($scope,$state,websiteService,HOST) {
    $scope.HOST = HOST;
    $scope.AddWebsite = function(){
      $.post(
        HOST+'index.php/Website/AddSite/',
        {
          'OwnerId' : window.localStorage.getItem("userId"),
          'Name' : $scope.Name
        },
        function(data,status){
          if(data!='null' && status == 'success'){
            var APIKey = JSON.parse(data);
            $scope.APIKey =  APIKey;
            $scope.$digest();
          }
        }
      );
    }

    $scope.copy = function() {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", $scope.scriptCopy);
    }

  }

})();
