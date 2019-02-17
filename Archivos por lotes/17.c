#include<stdio.h>
#include<stdbool.h>
#define TAM 25;
int decenas,a=2;
bool pase=true;
main(){
printf("Ingrese un numero \n");
scanf("%d", &decenas);
if(decenas==10);{
    pase=false;
}
if(pase){
    a=11+decenas;
}
else
    a=a+TAM;
printf("El tamaño es %d" ,a);
}




