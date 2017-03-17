(function() {
  'use strict';

  angular
    .module('app.WebSite')
    .controller('AddWebsiteController', AddWebsiteController);

  AddWebsiteController.$inject = ['$scope','$state','websiteService'];

  function AddWebsiteController($scope,$state,websiteService) {

    $scope.AddWebsite = function(){
      $.post(
        'http://localhost/SuperArdorAnalytics/index.php/Website/AddSite/',
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
