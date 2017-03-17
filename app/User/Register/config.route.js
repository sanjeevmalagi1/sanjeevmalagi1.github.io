(function() {
  'use strict';

  angular
    .module('app.User')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider
      .state('Register',{
        url: '/Register',
    	  views: {
            "content": {
                templateUrl: 'app/User/Register/Register.html',
                controller : 'RegisterController'
            }
        }
      })
  }

})();
