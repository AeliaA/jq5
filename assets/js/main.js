// wait till the html page loads (document), then run jquery/js function under, when it is ready
// OR
// when the html document is ready after loading, run the function below
// $(document).ready(function(){
// // when the button is clicked, run the function 
// 	$("button").click(function(){
// // slide n toggle the para that has the class hideme 
// 		$(".hideme").slideToggle(1000);
// 	});
// });

// // wait till the html page loads, then run jquery/js
// $(document).ready(function(){
// // when the button is clicked, run the function under it
// 	$("button").click(function(){
// // the para with the animateme class gets animated
// 		$(".animateme").animate({left:'250px' height:'550px' width:'200px'});
// 	});
// });

$(document).ready(function(){

	$("#one").click(function(){

		$("#two").slideDown(1000);
		});
		$("#stop").click(function(){
			$("#two").stop();

	});
});
















