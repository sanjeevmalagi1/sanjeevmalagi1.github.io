(function() {
  'use strict';

  angular
    .module('app.Core')
    .factory('newsTypeService', newsTypeService);

  newsTypeService.$inject = ['$state'];

  function newsTypeService($state) {

    var currentType = 'latest';

    var service = {
      setCurrentType : setCurrentType,
      getCurrentType: getCurrentType
    };

    return service;

    ////////////

    function setCurrentType(type){
      currentType = type;
    }

    function getCurrentType(){
       return currentType;
    }

  }

})();
