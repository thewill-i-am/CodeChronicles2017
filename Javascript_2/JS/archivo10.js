var vec=new Array(4),a=0;
function numeroAleatorio(min, max) {
  var num = Math.round(Math.random() * (max - min)+min);
  return num;
  }
  for(i=0;i<vec.length;i++){
    vec[i]=numeroAleatorio(0,1);
    document.write(vec[i]+"                    Tabla P                        <br>");
  }
   for(j=0;j<vec.length;j++){
    vec[j]=numeroAleatorio(0,1);
    document.write(vec[j]+"                      Tabla q                    <br>");
  }
   for(k=0;k<vec.length;k++){
    vec[k]=numeroAleatorio(0,1);                 
    document.write(vec[k]+"                     Tabla y                     <br>");         
  }
   for(p=0;p<vec.length;p++){
    vec[i]=numeroAleatorio(0,1);              
    document.write(vec[p]+"                      Tabla o                  <br>");
  }