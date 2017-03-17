(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('userService', userService);

  userService.$inject = ['$state'];

  function userService($state) {

    var service = {
      LogInUser : LogInUser,
      RegisterUser: RegisterUser
    };

    return service;

    ////////////

    function LogInUser(email,password){
      $http({
        method: 'POST',
        url: 'http://localhost/SuperArdorAnalytics/index.php/User/LogIn/',
        data: {
          'Email': email,
          'Password': password
          }
        }).then(function successCallback(response) {
            window.localStorage.setItem("user",response);
          }, function errorCallback(response) {
            console.log(response);
        });
    }

    function getMessInfo(uid){
       return $firebaseObject(firebaseDataService.mess.child(uid));
    }

    function getMessDetails(){
        return $firebaseArray(firebaseDataService.mess);
    }

  }

})();
