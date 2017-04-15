(function() {
  'use strict';

  angular
    .module('app.Core')
    .factory('firebaseDataService', firebaseDataService);

  function firebaseDataService() {
    var root = firebase.database().ref();

    var service = {
      root: root,
      projects: root.child('Projects'),
      projectImages: root.child('ProjectImages')
    };

    return service;
  }

})();
