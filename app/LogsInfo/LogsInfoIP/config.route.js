(function() {
  'use strict';

  angular
    .module('app.LogsInfo')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider
      .state('LogsInfoIP',{
        url: '/LogsInfoIP/:IP',
    	  views: {
            "content": {
                templateUrl: 'app/LogsInfo/LogsInfoIP/LogsInfoIP.html',
                controller : 'LogsInfoIPController'
            }
        }
      })
  }

})();
