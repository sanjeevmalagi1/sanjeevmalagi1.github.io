const getProjects = function(){
	return new Promise((resolve,reject)=>{
			$.ajax({
				url: "https://portfolio-77952.firebaseio.com/Projects.json",
				method: "GET",
				success: function(data) {
					resolve(data)
				},
				error: function(xhr) {
				  reject(xhr)
				}
			  })
	})
}

const getProjectImages = function(projectId){
	return new Promise((resolve,reject)=>{
			$.ajax({
				url: `https://portfolio-77952.firebaseio.com/ProjectImages/${projectId+1}.json`,
				method: "GET",
				success: function(data) {
					resolve(data)
				},
				error: function(xhr) {
				  reject(xhr)
				}
			  })
	})
}

function projectHTML(project,key){
	return `<div class="col-sm-6 col-md-4  portfolio-item">
		<a href="#portfolioModal" data-id="${key}" class="portfolio-link" data-toggle="modal">
			<div class="caption">
				<div class="caption-content">
					<i class="fa fa-eye fa-3x"></i>
				</div>
			</div>
			<img src="${project.Pic}" class="img-responsive" alt="Submarine" >
			<h4>${project.Name}</h4>
		</a>
	</div>
	${(key+1)%3==0 ? '<div class="clearfix" />' : ''}
	`;
}

function iconImage(imageURL,key){
	return `<img src="img/logo/${imageURL.name}.png" style="height:50px; margin:auto 25px;" />`
}


$( document ).ready(function() {
	$('#projects').html("<img src='http://i.imgur.com/DAJCzqV.gif' />");

	$('#portfolioModal').on('shown.bs.modal',async function (e) {
		$('.carousel-inner').html("");
  	const projectId 			= $(e.relatedTarget).data('id');
		const projectDetails 	= window.projects[projectId];
		const platformImages 	= projectDetails.platforms.map(iconImage);
		const frontendImages 	= projectDetails.frontend.map(iconImage);
		const backendImages 	= projectDetails.backend.map(iconImage);
		const databasesImages = projectDetails.Database.map(iconImage);

		$('.description')	.text(projectDetails.Description);
		$('.client')			.text(projectDetails.Client);
		$('.name')				.text(projectDetails.Name);
		$('.platforms')		.html(platformImages);
		$('.frontend')		.html(frontendImages);
		$('.backend')			.html(backendImages);
		$('.database')		.html(databasesImages);


		const projectImages = await getProjectImages(projectId);
		const Images = _.map(projectImages,(image,key)=>{
			return `<div class="item">
			 					<img class="img-responsive" src="${image}" />
							</div>`
		})
		$('.carousel-inner').html(Images);
		$('.carousel-inner .item:first-child').addClass("active")

	});

	(async function () {
	  window.projects = await getProjects();
	  window.projects.shift();
	  const projectsHtml = window.projects.map(projectHTML);

	  $('#projects').html(projectsHtml)
	}());





});
