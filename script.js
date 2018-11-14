const data = {
  navbarOpen: false,
  projects: {
    list: [],
    error: null,
    waiting: false
  }
};

const toggleNavbar = function() {
  data.navbarOpen = !data.navbarOpen;
  if(data.navbarOpen) {
      $(this).addClass('is-active');
      $('#navigationMenu').addClass('is-active');
  }
  else {
    $(this).removeClass('is-active');
    $('#navigationMenu').removeClass('is-active');
  }
}

const handleSubmit = function(event) {
  event.preventDefault();
  const _event$target = event.target;
  const name = _event$target.name;
  const email = _event$target.email;
  const message = _event$target.message;

  $.get( `https://hooks.zapier.com/hooks/catch/1061396/1l321g/?name=${name.value}&email=${email.value}&message=${message.value}`, function() {
    alert("Yay! Your Message has been sent.I will contact you soon.");
  })
  .fail(function() {
    alert("Oops! Something went wrong.Why dont you use my email.")
  });
}

function showProjects(){
  var source   = document.getElementById("project-template").innerHTML;
  var template = Handlebars.compile(source);
  var context = data.projects;
  var html    = template(context);
  // var template = $('#project-template').html();
  console.log(html);
  $('.projects').append(html);
}

function showError(){

}

function getProjects(){
  data.projects.waiting = true;
  $.get( `https://portfolio-77952.firebaseio.com/Projects.json`, function(response) {
    data.projects.waiting = false;
    data.projects.list = response;
    showProjects();
  })
  .fail(function(error) {
    data.projects.waiting = false;
    data.projects.error = error;
    showError();
  });
}

$(document).ready(function(){
    $('.navbar-burger').click(toggleNavbar);
    $( "#contactForm" ).submit(handleSubmit);
    getProjects();
    // showProjects();
});
