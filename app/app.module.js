(function() {
  'use strict';

  angular
    .module('app', [
      // Angular modules.
      'ngRoute',
      //'ui.router',
      //'ngMap',
      //'infinite-scroll',
      // Custom modules.
      'firebase',
      'app.Core',
      'app.Directives',
      //'app.Control',
      //'app.User',
      //'app.Dashboard',
      //'app.Sections',
      //'app.WebSite',
      //'app.LogsInfo'
      ])
    .config(configFunction)
    .constant('HOST','http://yournews.16mb.com/')
    .run(runFunction);


  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  }

  runFunction.$inject = ['$rootScope', '$location','HOST'];

  function runFunction($rootScope, $location,HOST) {
  }

})();
