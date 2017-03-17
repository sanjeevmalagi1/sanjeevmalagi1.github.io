(function() {
  'use strict';

  angular
    .module('app.LogsInfo')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider
      .state('LogsInfoURL',{
        url: '/LogsInfoURL/:URL',
    	  views: {
            "content": {
                templateUrl: 'app/LogsInfo/LogsInfoURL/LogsInfoURL.html',
                controller : 'LogsInfoURLController'
            }
        }
      })
  }

})();
