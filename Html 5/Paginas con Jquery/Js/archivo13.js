var zod=new Array(12);
zod[0]='<img src="Zodiaco/aries.jpg" width="300px" height="150px">';
zod[1]='<img src="Zodiaco/libra.jpg" width="300px" height="150px">';
zod[2]='<img src="Zodiaco/tauro.jpg" width="300px" height="150px">';
zod[3]='<img src="Zodiaco/escorpion.jpg" width="300px" height="150px">';
zod[4]='<img src="Zodiaco/geminis.png" width="300px" height="150px">';
zod[5]='<img src="Zodiaco/sagitario.jpg" width="300px" height="150px">';
zod[6]='<img src="Zodiaco/cancer.png" width="300px" height="150px">';
zod[7]='<img src="Zodiaco/capricornio.jpg" width="300px" height="150px">';
zod[8]='<img src="Zodiaco/leo.jpg" width="300px" height="150px">';
zod[9]='<img src="Zodiaco/acuario.jpg" width="300px" height="150px">';
zod[10]='<img src="Zodiaco/virgo.jpg" width="300px" height="150px">';
zod[11]='<img src="Zodiaco/piscis.jpg" width="300px" height="150px">';
var z="";
function vaciar1()
{
	document.getElementById("n1").value="";

}

function vaciar2()
{
	document.getElementById("n2").value="";
}

function prom()
{
	var dia=document.getElementById("n1");
	var mes=document.getElementById("n2");
	var vec=new Array("Aries","Libra","Tauro","Escorpio","Geminis","Sagitario","Cancer","Capricornio","Leo","Acuario","Virgo","Piscis");
	var msg;
	if(dia.value>=21 && mes.value==3 || dia.value<=20 && mes.value==4)
		//document.getElementById("res").innerHTML = ["<img src ='Zodiaco/aries.jpg'>"];

	{
		msg=vec[0];
			z=zod[0];
	}
	else
		if(dia.value>=24 && mes.value==9 || dia.value<=23 && mes.value==10)
			//document.getElementById("res").innerHTML = ["<img src ='Zodiaco/libra.jpg'>"];
		{
			msg=vec[1];
				z=z+zod[1];
		}
		else
			if(dia.value>=21 && mes.value==4 || dia.value<=21 && mes.value==5)
				//document.getElementById("res").innerHTML = ["<img src ='Zodiaco/tauro.jng'>"];
			{
				msg=vec[2];
					z=z+zod[2];
			}
			else
				if(dia.value>=24 && mes.value==10 || dia.value<=22 && mes.value==11)
					//document.getElementById("res").innerHTML = ["<img src ='Zodiaco/escorpion.jpg'>"];
				{
					msg=vec[3];
						z=z+zod[3];
				}
				else
					if(dia.value>=22 && mes.value==5 || dia.value<=21 && mes.value==6)
						//document.getElementById("res").innerHTML = ["<img src ='Zodiaco/geminis.png'>"];
				{
					msg=vec[4];
						z=z+zod[4];
				}
				else
					if(dia.value>=23 && mes.value==11 || dia.value<=21 && mes.value==12)
						//document.getElementById("res").innerHTML = ["<img src ='Zodiaco/sagitario.jpg'>"];
					{
					msg=vec[5];
						z=z+zod[5];
				}
				else
					if(dia.value>=21 && mes.value==6 || dia.value<=23 && mes.value==7)
						//document.getElementById("res").innerHTML = ["<img src ='Zodiaco/cancer.png'>"];
					{
						msg=vec[6];
							z=z+zod[6];
					}
						else
							if(dia.value>=22 && mes.value==12 || dia.value<=20 && mes.value==1)
								//document.getElementById("res").innerHTML = ["<img src ='Zodiaco/capricornio.jpg'>"];
								{
								 msg=vec[7];
								 	z=z+zod[7];
								}
								 else
									if(dia.value>=24 && mes.value==7 || dia.value<=23 && mes.value==8)
									// document.getElementById("res").innerHTML = ["<img src ='Zodiaco/leo.jpg'>"];
										{
											msg=vec[8];
												z=z+zod[8];
											}
												else
													if(dia.value>=21 && mes.value==1 || dia.value<=19 && mes.value==2)
														//document.getElementById("res").innerHTML = ["<img src ='Zodiaco/acuario.jpg'>"];
																{
																			msg=vec[9];
																				z=z+zod[9];
																						}
																						else
																							if(dia.value>=24 && mes.value==8 || dia.value<=23 && mes.value==2)
																								//document.getElementById("res").innerHTML = ["<img src ='Zodiaco/virgo.jpg'>"];
																								{
																										msg=vec[10];
																											z=z+zod[10];
																											}
																												else
																													if(dia.value>=21 && mes.value==2 || dia.value<=21 && mes.value==3){

																														msg=vec[11];
																														  	z=z+zod[11];
																														  }
																

																																			
																																												
	document.getElementById("res").innerHTML=msg;
	document.getElementById('cmt').innerHTML="Simbolo :"+"<br>"+z;
}