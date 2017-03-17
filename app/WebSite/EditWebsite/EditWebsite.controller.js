(function() {
  'use strict';

  angular
    .module('app.WebSite')
    .controller('EditWebsiteController', EditWebsiteController);

  EditWebsiteController.$inject = ['$scope','$state','websiteService'];

  function EditWebsiteController($scope,$state,websiteService) {

    $scope.$watch(function () { return websiteService.getCurrentWebsite(); }, function (newValue, oldValue) {
       if (newValue != null) {

           newValue.map(function(data){
             $scope.App = data;

           });

       }
   }, true);

   $scope.EditWebsite = function(){
     //console.log($scope.App);
     $.post(
       'http://localhost/SuperArdorAnalytics/index.php/Website/EditWebSite/',
       {
         'WebSiteID' : $scope.App.ID,
         'NewName' : $scope.App.Name
       },
       function(data,status){
         if(data!='null' && status == 'success'){
           window.localStorage.setItem("currentWebsite",JSON.stringify([$scope.App]));
           websiteService.setCurrentWebsite(JSON.stringify([$scope.App]));
           $state.go('Dashboard');
         }
       }
     );
   }

  }

})();
