$(document).ready(function(){
	var x=true;
	$("#abierto").click(function(){
		if(x){
			$("#login form").fadeIn(600);
			$(this).addClass("cerrado");
			x=false;
		} else{
			$("#login form").slideUp(300);
			$(this).removeClass("cerrado");
			x=true;
		}
	});
});
$(document).ready(function(){
	var x=true;
	$("#abierto2").click(function(){
		if(x){
			$("#login2 form").fadeIn(600);
			$(this).addClass("cerrado");
			x=false;
		} else{
			$("#login2 form").slideUp(300);
			$(this).removeClass("cerrado");
			x=true;
		}
	});
});
$(document).ready(function(){
	var x=true;
	$("#abierto3").click(function(){
		if(x){
			$("#login3 form").fadeIn(600);
			$(this).addClass("cerrado");
			x=false;
		} else{
			$("#login3 form").slideUp(300);
			$(this).removeClass("cerrado");
			x=true;
		}
	});
});