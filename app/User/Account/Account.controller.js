(function() {
  'use strict';

  angular
    .module('app.User')
    .controller('AccountController', AccountController);

  AccountController.$inject = ['$scope','$state','HOST'];

  function AccountController($scope,$state,HOST) {

    if(! window.localStorage.getItem("userId")){
      //redirect to dashboard
      $state.go('LogIn');
    }

    $scope.Email = window.localStorage.getItem("userEmail");

    $scope.ChangeEmail = function() {
      $.post(
        HOST+'index.php/User/ChangeEmail',
        {
          'ID' : window.localStorage.getItem("userId"),
          'oldEmail' :window.localStorage.getItem("userEmail"),
          'newEmail' : $scope.newEmail
        },
        function(data,status){
          if(data!='null' && status == 'success'){
            window.localStorage.setItem("userEmail",$scope.newEmail);
            $scope.Email = $scope.newEmail;
            console.log("Email Changed");
            $scope.$digest();

          }
        }
      );
    }

    $scope.ChangePassword = function() {
      $.post(
        HOST+'index.php/User/ChangePassword',
        {
          'ID' : window.localStorage.getItem("userId"),
          'Email' : window.localStorage.getItem("userEmail"),
          'oldPassword' : $scope.oldPassword,
          'newPassword' : $scope.newPassword
        },
        function(data,status){
          if(data!='null' && status == 'success'){
            console.log("Password Changed");
            $scope.$digest();
          }
        }
      );
    }


  }

})();
