(function() {
  'use strict';

  angular
    .module('app.WebSite')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider
      .state('EditWebsite',{
        url: '/EditWebsite',
    	  views: {
            "content": {
                templateUrl: 'app/WebSite/EditWebsite/EditWebsite.html',
                controller : 'EditWebsiteController'
            }
        }
      })
  }

})();
