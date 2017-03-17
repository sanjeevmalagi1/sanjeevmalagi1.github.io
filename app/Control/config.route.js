(function() {
  'use strict';

  angular
    .module('app.Control')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider
      .state('ControlCenter',{
        url: '/Control',
    	  views: {
            "content": {
                templateUrl: 'app/Control/ControlCenter.html',
                controller : 'ControlController'
            }
        }
      })
  }

})();
