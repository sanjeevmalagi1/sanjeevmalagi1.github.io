(function() {
  'use strict';

  angular
    .module('app.User')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$scope','$state','$http','HOST'];

  function RegisterController($scope,$state,$http,HOST) {
    console.log("welcome to register");

    if(window.localStorage.getItem("userId")){
      //redirect to dashboard
      $state.go('Dashboard');
    }


    $scope.Register = function(){
      $.post(
        HOST+'index.php/User/AddUser/',
        {
          'Email' : $scope.email,
          'Password' : $scope.password
        },
        function(data,status){
          $.post(
            HOST+'index.php/User/LogIn/',
            {
              'Email' : $scope.email,
              'Password' : $scope.password
            },
            function(data,status){
              if(data!='null' && status == 'success'){
                var userInfo = JSON.parse(data);
                window.localStorage.setItem("userId",userInfo.ID);
                window.localStorage.setItem("userEmail",userInfo.Email);
                $state.go('Dashboard');
              }
            }
          );
        }
      );
    }
  }

})();
