(function(){

	flag = 0;

	$main = $('#main');

	$main.mouseenter(function() {
	    $(this).css("left","1.8%").css("opacity","1");
	}).mouseleave(function() {
	    $(this).css("left","-1%").css("opacity","0.5");
	});
	
	$('#el1').on("click", function(){
		$path = $('#box1').offset().top;
		$("html, body").animate({scrollTop:$path}, 1000);
		window.location.replace("#box1");

		if(flag == 0){
			$("#el1").animate({height:'30px', width:'30px'}, 100);
			
			$("#c1").animate({top:'-10%', left:'120%'}, 100);
			$("#c1").animate({height:'30px', width:'30px'}, 200);

			$("#c2").animate({top:'35%', left:'160%'}, 200);
			$("#c2").animate({height:'30px', width:'30px'}, 200);

			$("#c3").animate({top:'85%', left:'120%'}, 300);
			$("#c3").animate({height:'30px', width:'30px'}, 200);

			flag = 1;
			$main.off('mouseenter mouseleave');

		}else{
			$("#el1").animate({height:'35px', width:'35px'}, 100);

			$("#c1").animate({top:'38%', left:'45%'}, 100);
			$("#c1").animate({height:'5px', width:'5px'}, 200);

			$("#c2").animate({top:'48%', left:'65%'}, 100);
			$("#c2").animate({height:'5px', width:'5px'}, 200);

			$("#c3").animate({top:'58%', left:'45%'}, 100);
			$("#c3").animate({height:'5px', width:'5px'}, 200);

			flag = 0;

			$main.mouseenter(function() {
			    $(this).css("left","1.8%").css("opacity","1");
			}).mouseleave(function() {
			    $(this).css("left","-1%").css("opacity","0.5");
			});
		}

	});

	$("#el2").on("click", function(){
		$path = $('#box2').offset().top;
		$("html, body").animate({scrollTop:$path}, 1000);
		window.location.replace("#box2");
		
	});


	$('#el3').on("click", function(){
		$path = $('#box3').offset().top;
		$("html, body").animate({scrollTop:$path}, 1000);
		window.location.replace("#box3");
	});
	

})();