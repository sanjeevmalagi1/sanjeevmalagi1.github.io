(function() {
  'use strict';

  angular
    .module('app.LogsInfo')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider
      .state('LogsInfo',{
        url: '/LogsInfo/:ID',
    	  views: {
            "content": {
                templateUrl: 'app/LogsInfo/LogsInfo/LogsInfo.html',
                controller : 'LogsInfoController'
            }
        }
      })
  }

})();
