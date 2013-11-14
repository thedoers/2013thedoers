//= require "vendor/jquery"
//= require "vendor/jquery.unveil.min"
$( document ).ready(function() {

$(".bottone-container-hover a").click(function(e){

	e.stopPropagation();

	});

$("img").unveil(200);
});