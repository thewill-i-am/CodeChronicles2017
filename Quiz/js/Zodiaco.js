function vaciar(){

		document.getElementById("n1").value=" ";
}

function vaciar2(){

		document.getElementById("n2").value=" ";
}

function Zodiaco(){

   var signos= new Array();
       signos[0]=["<img src='imagenes/Aquario.png'/>"];
       signos[1]=["<img src='imagenes/Piscis.png'/>"];
       signos[2]=["<img src='imagenes/Aries.png'>"];
       signos[3]=["<img src='imagenes/Tauro.png'>"];
       signos[4]=["<img src='imagenes/Cancer.png'>"];
       signos[5]=["<img src='imagenes/Capricornio.png'>"];
       signos[6]=["<img src='imagenes/Geminis.png'>"];
       signos[7]=["<img src='imagenes/Leo.png'>"];
       signos[8]=["<img src='imagenes/Libra.png'>"];
       signos[9]=["<img src='imagenes/Virgo.png'>"];
       signos[10]=["<img src='imagenes/Sagitario.png'>"];
       signos[11]=["<img src='imagenes/Escorpio.png'>"];

	var d=document.getElementById("n1");
	d.value=d.value.toUpperCase();

	var m=document.getElementById("n2");
    m.value=m.value.toUpperCase();

	var z;

	  if((d.value>=20 && m.value=="ENERO") || (d.value<=18 && m.value=="FEBRERO")){

	  	document.getElementById("img").innerHTML="Este es tu imagen de tu signo Acuario "+"<br>"+signos[0];
	  }

	    else

	    	 if((d.value>=19 && m.value=="FEBRERO") || (d.value<=20 && m.value=="MARZO")){

	  	document.getElementById("img").innerHTML="Este es tu imagen de tu signo Piscis "+"<br>"+signos[1];
	  }
	     else

	    	 if((d.value>=21 && m.value=="MARZO") || (d.value<=19 && m.value=="ABRIL")){

	  	document.getElementById("img").innerHTML="Este es tu imagen de tu signo Aries "+"<br>"+signos[2];
	  }
	     else

	    	 if((d.value>=20 && m.value=="ABRIL") || (d.value<=20 && m.value=="MAYO")){

	  	document.getElementById("img").innerHTML="Este es tu imagen de tu signo Tauro "+"<br>"+signos[3];
	  }
	        else

	    	 if((d.value>=21 && m.value=="MAYO") || (d.value<=20 && m.value=="JUNIO")){

	  	document.getElementById("img").innerHTML="Este es tu imagen de tu signo Piscis "+"<br>"+signos[6];
	  }
	             else

	    	 if((d.value>=21 && m.value=="JUNIO") || (d.value<=22 && m.value=="JULIO")){

	  	document.getElementById("img").innerHTML="Este es tu imagen de tu signo Cancer "+"<br>"+signos[4];
	  }
	                   else

	    	 if((d.value>=23 && m.value=="JULIO") || (d.value<=22 && m.value=="AGOSTO")){

	  	document.getElementById("img").innerHTML="Este es tu imagen de tu signo Leo "+"<br>"+signos[7];
	  }
	              else

	    	 if((d.value>=23 && m.value=="AGOSTO") || (d.value<=22 && m.value=="SEPTIEMBRE")){

	  	document.getElementById("img").innerHTML="Este es tu imagen de tu signo Virgo "+"<br>"+signos[9];
	  }
        	           else

	    	 if((d.value>=23 && m.value=="SEPTIEMBRE") || (d.value<=22 && m.value=="OCTUBRE")){

	  	document.getElementById("img").innerHTML="Este es tu imagen de tu signo Libra "+"<br>"+signos[8];
	  }
                         	  else

	    	 if((d.value>=23 && m.value=="OCTUBRE") || (d.value<=21 && m.value=="NOVIEMBRE")){

	  	document.getElementById("img").innerHTML="Este es tu imagen de tu signo Escorpio "+"<br>"+signos[11];
	  }
	                                else
	             if((d.value>=22 && m.value=="NOVIEMBRE") || (d.value<=21 && m.value=="DICIEMBRE")){

	  	document.getElementById("img").innerHTML="Este es tu imagen de tu signo Sagitario "+"<br>"+signos[10];
	  }
	                                           else
	             if((d.value>=22 && m.value=="DICIEMBRE") || (d.value<=19 && m.value=="ENERO")){

	  	document.getElementById("img").innerHTML="Este es tu imagen de tu signo Capricornio "+"<br>"+signos[5];
	  }









}