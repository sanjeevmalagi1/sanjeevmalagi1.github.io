(function() {
  'use strict';

  angular
    .module('app.User')
    .controller('LogInController', LogInController);

  LogInController.$inject = ['$scope','$state'];

  function LogInController($scope,$state) {
    if(window.localStorage.getItem("userId")){
      //redirect to dashboard
      $state.go('Dashboard');
    }

    $scope.LogIn = function(){

      $.post(
        'http://localhost/SuperArdorAnalytics/index.php/User/LogIn/',
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
