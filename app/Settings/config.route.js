(function() {
  'use strict';

  angular
    .module('app.Settings')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider
      .state('SettingsCenter',{
        url: '/Settings',
    	  views: {
            "content": {
                templateUrl: 'app/Settings/SettingsCenter.html',
                controller : 'SettingsController'
            }
        }
      })
  }

})();
