var a=0;
var m=parseInt(prompt("Digite un numero"));

 if (m>=50000){
            a= m/50000;
            a=Math.floor(a);
            m= m-a*50000;
            document.write("Cantidad de billetes de 50000: "+a);
        }

        	if (m>=20000){
            a= m/20000;
            m= m-a*20000;
            document.write("Cantidad de billetes de 20000: "+a);
        }
             	if (m>=10000){
            	a= m/10000;
              a=Math.floor(a);
           	 	m= m-a*10000;
              m=Math.floor(m);
           	 	 document.write("Cantidad de billetes de 10000: "+a);
           	 }
           	 
           		if (m>=5000){
            	a= m/5000;
              a=Math.floor(a);
            	m= m-a*5000;
              m=Math.floor(m);
            	 document.write("Cantidad de billetes de 5000: "+a);
            }
             		if (m>=2000){
            		a= m/2000;
                a=Math.floor(a);
           	 		m= m-a*2000;
                m=Math.floor(m);
           	 		 document.write("Cantidad de billetes de 2000: "+a);
           	 }
             		if (m>=1000){
            		a= m/1000;
                a=Math.floor(a);
           	 		m= m-a*1000;
                m=Math.floor(m);
           	 		 document.write("Cantidad de billetes de 1000: "+a);
           	 		}
             			if (m>=500){
            			a= m/500;
                  a=Math.floor(a);
           	 			m= m-a*500;
                    m=Math.floor(m);
           	 			 document.write("Cantidad de monedas de 500: "+a);
           	 		}
             			if (m>=100){
            			a= m/100;
                  a=Math.floor(a);
           	 			m= m-a*100;
                   m=Math.floor(m);
           	 		 document.write("Cantidad de monedas de 100: "+a);
           	 		}
             			if (m>=50){
            			a= m/50;
                  a=Math.floor(a);
           	 			m= m-a*50;
                   m=Math.floor(m);
           	 			 document.write("Cantidad de monedas de 50: "+a);
           	 			}
             				if (m>=25){
            				a= m/25;
                    a=Math.floor(a);
           	 				m= m-a*25;
                   m=Math.floor(m);
           	 				 document.write("Cantidad de monedas de 25: "+a);
           	 			}
             				if (m>=10){
            				a= m/10;
                    a=Math.floor(a);
           	 				m= m-a*10;
                     m=Math.floor(m);
           	 				 document.write("Cantidad de monedas de 10: "+a);
           	 			}
             					if (m>=5){
            					a= m/5;
                      a=Math.floor(a);
           	 					m= m-a*5;
                     m=Math.floor(m);
           	 				 	document.write("Cantidad de monedas de 5: "+a);
           	 				 }
           	 				 	

           	 				 	


	ud=Math.floor(ud);
	document.write(ud);