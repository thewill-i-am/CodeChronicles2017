function vaciar(){
	document.getElementById("n1").value= " ";
}

function mundial(){
	var a= document.getElementById('n1').value;
	if((a>=1896) && (a% 4==0)){
		if(a>2017){
			document.getElementById('res').innerHTML ="En ese año se van a dar los juegos olimpicos";
		}
		else
			document.getElementById('res').innerHTML= "En ese año se dieron los juegos olimpicos";
	}

	else
		if((a>=1930) && (a% 4==2)){
			if(a>2017){
				document.getElementById('res').innerHTML ="En ese año se va a celebral el mundial";
			}
			else
				document.getElementById('res').innerHTML ="En ese año se  celebro el mundial";
		}
		else 
			if(a>2017){
				document.getElementById('res').innerHTML ="En este año no se dara ningun evento";
			}
			else
				document.getElementById('res').innerHTML ="En ese año se dio ningun evento deportivo";
}