#include<stdio.h>

char *vec[7],i;
main(){
    vec[1]=strdup("Lunes");
    vec[2]=strdup("Martes");
    vec[3]=strdup("Miercoles");
    vec[4]=strdup("Jueves");
    vec[5]=strdup("Viernes");
    vec[6]=strdup("Sabado");
    vec[7]=strdup("Domingo");

    for(i=1; i<=7; i++){
            printf("%s \n", vec[i]);
    }
}
