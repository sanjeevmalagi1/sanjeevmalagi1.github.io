(function() {
  'use strict';

  angular
    .module('app.Sections')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider
      .state('Sections',{
        url: '/Section/:section',
    	  views: {
            "content": {
                templateUrl: 'app/Sections/Sections.html',
                controller : 'SectionsController'
            }
        }
      })
  }

})();
