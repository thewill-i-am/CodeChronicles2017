#include<stdio.h>
char color[10];
main(){
printf("Escriba el color");
gets(color);
if((strcmp(color,"rojo"==0))){
        printf("Alto \n");
}

  if((strcmp(color,"amarillo"==0))){
        printf("Precaucion \n");
  }
  if((strcmp(color,"Verde"==0))){
        printf("siga \n");
  }
}

