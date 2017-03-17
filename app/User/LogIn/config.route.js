(function() {
  'use strict';

  angular
    .module('app.User')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider
      .state('LogIn',{
        url: '/LogIn',
    	  views: {
            "content": {
                templateUrl: 'app/User/LogIn/LogIn.html',
                controller : 'LogInController'
            }
        }
      })
  }

})();
