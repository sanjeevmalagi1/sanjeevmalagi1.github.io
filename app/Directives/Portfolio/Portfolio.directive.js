(function() {
  'use strict';

  angular
    .module('app.Directives')
    .directive('ynPortfolio', ynPortfolio);

  function ynPortfolio() {
    return {
      templateUrl: 'app/Directives/Portfolio/Portfolio.html',
      restrict: 'E',
      controller: PortfolioController,
      controllerAs: 'vm',
      bindToController: true
      };
  }

  PortfolioController.$inject = ['$scope','projectService'];

  function PortfolioController($scope,projectService) {
      $scope.Projects = projectService.getProjects();

/*
      //Listen for file selection

document.getElementById('Images').addEventListener('change', function(e){
    //Get files
    for (var i = 0; i < e.target.files.length; i++) {
        var imageFile = e.target.files[i];
        uploadImageAsPromise(imageFile);
    }
});

      //Handle waiting to upload each file using promise
      function uploadImageAsPromise (imageFile) {
        return new Promise(function (resolve, reject) {
            var storageRef = firebase.storage().ref().child("ProjectPics/"+imageFile.name);

            //Upload file
            var task = storageRef.put(imageFile);

            //Update progress bar
            task.on('state_changed',
                function progress(snapshot){
                    var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                    //uploader.value = percentage;
                },
                function error(err){

                },
                function complete(){
                    var downloadURL = task.snapshot.downloadURL;
                    console.log(downloadURL);
                    projectService.addImages($scope.projectId,downloadURL);

                }
            );
        });
      }*/

    }



})();
