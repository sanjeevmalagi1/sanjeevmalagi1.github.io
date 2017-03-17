(function() {
  'use strict';

  angular
    .module('app.Core')
    .factory('websiteService', websiteService);

  websiteService.$inject = ['$state'];

  function websiteService($state) {

    var currentWebsite = {};

    var service = {
      setCurrentWebsite : setCurrentWebsite,
      getCurrentWebsite: getCurrentWebsite,
      resetCurrentWebsite: resetCurrentWebsite
    };

    return service;

    ////////////

    function setCurrentWebsite(website){

      currentWebsite = JSON.parse(website);
    }

    function getCurrentWebsite(){
       return currentWebsite;
    }

    function resetCurrentWebsite(){
      currentWebsite = NaN;
      window.localStorage.removeItem("currentWebsite");
    }

  }

})();
