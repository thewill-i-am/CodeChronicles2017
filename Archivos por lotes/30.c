
#include<stdio.h>
char nombre[5][10],i,j;
float estatura[5];
main(){
    printf("Escriba los nombres");
    for(i=1; i<=5; i++){
    scanf("%s", &nombre[i]);
    }
    for(i=1; i<=5; i++){
        printf("%s \t", nombre[i]);
    }

    for(j=1; j<=5; j++){
    scanf("%f", &estatura[j]);
    }
    for(j=1; j<=5; j++){
        printf("%s %f \t", nombre[j],estatura[j]);
    }
}
