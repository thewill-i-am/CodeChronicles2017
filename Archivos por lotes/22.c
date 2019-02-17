#include<stdio.h>
int a,i,c;
main(){
       printf("Escriba 7 numeros");
    do{
        scanf("%d",&a);
        i++;
       if(a>=c){
            c=a;
    }
    }while(i<=7);

    printf("El mayor es: %d", c);
}



