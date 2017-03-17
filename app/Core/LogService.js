(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('logService', logService);

  logService.$inject = ['$state'];

  function logService($state) {

    var service = {
      getLogs : getLogs,
      updateMessInfo: updateMessInfo,
      getMessDetails: getMessDetails
    };

    return service;

    ////////////

    function getLogs(key){
      return $.post(
        'http://localhost/SuperArdorAnalytics/index.php/Logger/GetLogs/',
        {
          'key' : key
        },
        function(data,status){
          console.log(data,status);
          return data;
        }
      );
    }

    function getMessInfo(uid){
       return $firebaseObject(firebaseDataService.mess.child(uid));
    }

    function getMessDetails(){
        return $firebaseArray(firebaseDataService.mess);
    }

  }

})();
