#include<stdio.h>
int n,ud;
main(){
            scanf("%d" ,&n);
     while(n>0){
        ud=n%10;
        n=n/10;
        printf("%d", ud);
    }
}
