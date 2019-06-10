$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".menu").css("background" , "white");
	    $(".alink").css("color" , "black");
	    $(".first-span").css("color" , "#e81050");
	  }

	  else{
		  $(".menu").css("background" , "transparent");  	
		  $(".alink").css("color" , "white");
		  $(".first-span").css("color" , "white");
	  }
  })
})
