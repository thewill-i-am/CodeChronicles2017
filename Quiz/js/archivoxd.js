function vaciar(){

	document.getElementById("n1").value="";
}

function Perfecto(){

     var i;
     var r=0;
     var a=document.getElementById("n1").value;    
     

          for(i=1;i<=a-1;i++){
        	
            if(a % i==0){ 
             r=r+i;
            }
          
          }


          if(r==a){
           	document.getElementById("res").innerHTML="Es perfecto";
          }

          else
            document.getElementById("res").innerHTML="No es perfecto";
}