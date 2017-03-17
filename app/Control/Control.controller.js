(function() {
  'use strict';

  angular
    .module('app.Control')
    .controller('ControlController', ControlController);

  ControlController.$inject = ['$scope','$state'];

  function ControlController($scope,$state) {
    

    $scope.ToggleSwitch =  function(item){
      if(item.Value){
        console.log("OFF");
        $.get('http://'+Host+'/AutomationProject/index.php/Actions/TurnOffControl/'+item.ID);
      }
      else{
        console.log("ON");
        $.get('http://'+Host+'/AutomationProject/index.php/Actions/TurnOnControl/'+item.ID);
      }
      item.Value = !item.Value;
    }

    $scope.removeControl =  function(){
      if(confirm("are u sure?")){
        $.post(
          'http://'+Host+'/AutomationProject/index.php/Actions/RemoveControl/',
          {
            'ID' : this.item.ID
          },
          function(data,status){
            console.log(data,status);
            GetData();
          }
        );
      }
    }

    $scope.editmode = function(){
      this.item.editmode = true;
    }

    $scope.exitEditMode = function() {
      this.item.editmode = false;
    }

    $scope.addMode = function(){
      $scope.addmode = true;
    }

    $scope.exitAddMode = function() {
      $scope.addmode = false;
    }

    $scope.addNew = function(){
      $scope.addmode = false;
      $.post(
        'http://'+Host+'/AutomationProject/index.php/Actions/AddControl/',
        {
          'Name' : $scope.newItem.Name
        },
        function(data,status){
          console.log(data,status);
          GetData();
          $scope.newItem="";
        }
      );
    }

    $scope.saveEdit = function(){
      this.item.editmode = false;
      $.post(
        'http://'+Host+'/AutomationProject/index.php/Actions/EditControl/',
        {
          'ID' : this.item.ID,
          'Name' : this.item.Name,
          'Type' : this.item.Type
        },
        function(data,status){
          console.log(data,status);
        }
      );
    }

    function GetData(){
      $.getJSON('http://'+Host+'/AutomationProject/index.php/Queries/GetAllControls', function(jd) {
          $scope.items = jd;
          $scope.$digest();
      });
    }

    function CheckHost(){
      if(!window.localStorage.getItem("host")){
        $state.go('SettingsCenter');
      }
      else{
        Host = window.localStorage.getItem("host");
      }
    }
  }



})();
