(function() {
  'use strict';

  angular
    .module('app.User')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider
      .state('Account',{
        url: '/Account',
    	  views: {
            "content": {
                templateUrl: 'app/User/Account/Account.html',
                controller : 'AccountController'
            }
        }
      })
  }

})();
