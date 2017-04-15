(function() {
  'use strict';

  angular
    .module('app.Core')
    .factory('projectService', projectService);

  projectService.$inject = ['$firebaseArray','firebaseDataService'];

  function projectService($firebaseArray,firebaseDataService) {
    var currentProject = {};

    var service = {
      setCurrentProject : setCurrentProject,
      getCurrentProject : getCurrentProject,
      getProjects : getProjects,
      getProjectImages : getProjectImages,
      addImages : addImages
    };

    return service;

    ////////////

    function setCurrentProject(project){
      currentProject = project;
    }

    function getCurrentProject(){
       return currentProject;
    }

    function getProjects() {
      return $firebaseArray(firebaseDataService.projects);
    }

    function getProjectImages(id) {
      return $firebaseArray(firebaseDataService.projectImages.child(id));
    }

    function addImages(id,url){
      firebaseDataService.projectImages.child(id).push(url);
    }

  }

})();
