(function() {
  'use strict';

  angular
    .module('app.WebSite')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider
      .state('AddWebsite',{
        url: '/AddWebsite',
    	  views: {
            "content": {
                templateUrl: 'app/WebSite/AddWebsite/AddWebsite.html',
                controller : 'AddWebsiteController'
            }
        }
      })
  }

})();
