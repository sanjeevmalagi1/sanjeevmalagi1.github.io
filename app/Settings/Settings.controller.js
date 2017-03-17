(function() {
  'use strict';

  angular
    .module('app.Settings')
    .controller('SettingsController', SettingsController);

  SettingsController.$inject = ['$scope','$state'];

  function SettingsController($scope,$state) {
    $scope.host = window.localStorage.getItem("host");
    $scope.SaveHost =  function(){
      window.localStorage.setItem("host", $scope.host);
    }
    //window.localStorage.setItem("email", $scope.user.email);
  }



})();
