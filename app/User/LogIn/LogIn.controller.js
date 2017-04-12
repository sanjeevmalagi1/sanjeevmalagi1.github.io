(function() {
  'use strict';

  angular
    .module('app.User')
    .controller('LogInController', LogInController);

  LogInController.$inject = ['$scope','$state','HOST'];

  function LogInController($scope,$state,HOST) {
    if(window.localStorage.getItem("userId")){
      //redirect to dashboard
      $state.go('Dashboard');
    }
    console.log(HOST);

    $scope.LogIn = function(){

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
  }

})();
