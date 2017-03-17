var currentLog = {};
var currentIP = {};

function load(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      //console.log(xhr.response,xhr.readyState); //Outputs a DOMString by default
      callback(xhr.response,xhr.readyState);
    }
  }

  xhr.open('GET', url, true);
  xhr.send('');
}

function LogInitial(){
  
  load('//freegeoip.net/json/',function(data,status){
    currentIP =  JSON.parse(data);
    console.log(currentIP);
  });

  //console.log(window.location);

  load('http://localhost/AutomationProject/index.php/Queries/GetAllControls',function(data,status){
    currentLog =  JSON.parse(data);
    console.log(currentLog);
    //console.log(data,status);
  });

  LogTenSeconds();
  LogThirtySeconds();
  LogThreeMins();
}

function LogTenSeconds(){
  setTimeout(function(){
    load('http://localhost/AutomationProject/index.php/Queries/GetAllControls',function(data,status){
      //console.log(data,status);
    })
  }, 10000);
}

function LogThirtySeconds(){
  setTimeout(function(){
    load('http://localhost/AutomationProject/index.php/Queries/GetAllControls',function(data,status){
      //console.log(data,status);
    })
  }, 30000);
}

function LogThreeMins(){
  setTimeout(function(){
    load('http://localhost/AutomationProject/index.php/Queries/GetAllControls',function(data,status){
      console.log(data,status);
    })
  }, 300000);
}

LogInitial();
