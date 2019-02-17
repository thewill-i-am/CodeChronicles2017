#include<stdio.h>
int vec[5],i;
main(){
    for(i=1; i<=5; i++){
    scanf("%d", &vec[i]);
    }
    for(i=1; i<=5; i++){
        printf("%d", vec[i]);
    }
}
