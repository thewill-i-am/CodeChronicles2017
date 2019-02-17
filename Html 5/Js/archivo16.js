
function vaciar(){
	document.getElementById("n1").value+"";
}
function cuadrado(){
	var miArray = new Array(5);
	miArray[0] = "Tijera";
	miArray[1] = "Papel";
	miArray[2] = "Piedra";	

var vec=new Array(3),a=0;
function numeroAleatorio(min, max) {
	var num = Math.round(Math.random() * (max - min)+min);
	return num;
	}
	for(i=0;i<vec.length;i++){
		vec[i]=numeroAleatorio(0,2);
	}

	var monto= document.getElementById("n1");
	var msg;
	if (vec[i]==0 && miArray[0]) {//numero 0 son Gano , nunero 1 perdio y numero 3 es empato// 
		document.write("empato el adversario saco Tijera");
		monto.style.background="green";
	}
		else
			if (vec[i]==0  && miArray[1]) {
			document.write("Gano el adversario saco Papel");
			monto.style.background="green";

		}
		else
			if (vec[i]==0  && miArray[2]) {
			document.write("perdio el adversario saco Piedra");
			monto.style.background="green";
		}
		else
		  	if (vec[i]==1 && miArray[0]) {//numero 0 son Gano , nunero 1 perdio y numero 3 es empato// 
		document.write("perdio el adversario saco Piedra");
		monto.style.background="green";

	}
		else
			if (vec[i]==1  && miArray[1]) {
			document.write("empato el adversario saco Papel");
			monto.style.background="green";

		}
		else
			if (vec[i]==1 && miArray[2]) {
			document.write("perdio el adversario saco Tijera");
			monto.style.background="Gano";
		}
		else
		  	if (vec[i]==2 && miArray[0]) {//numero 0 son Gano , nunero 1 perdio y numero 3 es empato// 
			document.write("Gano el adversario saco Tijera");
			monto.style.background="green";

	}
		else
			if (vec[i]==2  && miArray[1]) {
			document.write("perdio el adversario saco Papel");
			monto.style.background="green";

		}
		else
			if (vec[i]==2 && miArray[2]) {
			document.write("empato el adversario saco Piedra");
			monto.style.background="Gano";
		}
		 
	document.getElementById("res").innerHTML=vec[miArray];
		//document.getElementById("cmt").innerHTML=msg[];//
}
