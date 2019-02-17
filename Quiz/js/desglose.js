var resu = new Array(12);

function vaciar(){
	document.getElementById("n1").value= " ";
}

function desglose(){
	mont=document.getElementById('n1').value;


	if(mont>=50000){
		var cincu=mont/50000;
		mont=mont%50000;
		circu=Math.floor(circu);
		resu[0]= "Billetes de 50000= "+cincu+"<br>";
	}

	if(mont>=20000){
		var vein=mont/20000;
		mont=mont%20000;
		vein=Math.floor(vein);
		resu[1]= "Billetes de 20000= "+vein+"<br>";
	}

	if(mont>=10000){
		var diez=mont/10000;
		mont=mont%10000;
		diez=Math.floor(diez);
		resu[2]= "Billetes de 10000= "+diez+"<br>";
	}

	if(mont>=5000){
		var cinc=mont/5000;
		mont=mont%5000;
		cinc=Math.floor(cinc);
		resu[3]= "Billetes de 5000= "+cinc+"<br>";
	}

	if(mont>=2000){
		var dos=mont/2000;
		mont=mont%2000;
		dos=Math.floor(dos);
		resu[4]= "Billetes de 2000= "+dos+"<br>";
	}

	if(mont>=1000){
		var mil=mont/1000;
		mont=mont%1000;
		mil=Math.floor(mil);
		resu[5]= "Billetes de 1000= "+mil+"<br>";
	}

	if(mont>=500){
		var quitej=mont/500;
		mont=mont%500;
		quitej=Math.floor(quitej);
		resu[6]= "Monedas de 500= "+quitej+"<br>";
	}

	if(mont>=100){
		var cien=mont/100;
		mont=mont%100;
		cien=Math.floor(cien);
		resu[7]= "Monedas de 100= "+cien+"<br>";
	}

	if(mont>=50){
		var cincum=mont/50;
		mont=mont%50;
		cincum=Math.floor(cincum);
		resu[8]= "Monedas de 50= "+cincum+"<br>";
	}

	if(mont>=25){
		var veint=mont/25;
		mont=mont%25;
		veint=Math.floor(veint);
		resu[9]= "Monedas de 25= "+veint+"<br>";
	}

	if(mont>=10){
		var diem=mont/10;
		mont=mont%10;
		diem=Math.floor(diem);
		resu[10]= "Monedas de 10= "+diem+"<br>";
	}

	if(mont>=5){
		var circu=mont/5;
		mont=mont%5;
		circu=Math.floor(circu);
		resu[11]= "Monedas de 5= "+circu+"<br>";
	}
	document.getElementById("res").innerHTML = resu;
}