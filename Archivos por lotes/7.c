#include<stdio.h>
int a,b,c,d,e,m;
main(){
    printf("Escriba el monto \n");
    scanf("%d", &m);
    printf("Su monto es %d \n" ,m);
    if (m>=50000){
            a= m/50000;
            m= m-a*50000;
            printf ("%d \n", a);
    }
    if (m>=20000){
            a= m/20000;
            m= m-a*20000;
            printf("%d \n", a);
    }
        if (m>=10000){
            a= m/10000;
            m= m-a*10000;
            printf("%d \n" , a);
    }
        if (m>=5000){
            a= m/5000;
            m= m-a*5000;
            printf("%d \n", a);

    }
        if (m>=2000){
            a= m/2000;
            m= m-a*2000;
            printf("%d \n", a);
        }

        if (m>=1000){
            a= m/1000;
            m= m-a*1000;
            printf("%d \n", a);
        }

        if (m>=500){
            a= m/500;
            m= m-a*500;
            printf("%d \n", a);
        }

        if (m>=100){
            a= m/100;
            m= m-a*100;
            printf("%d \n", a);
        }
#include<stdio.h>
int a,i;
main(){
    do{
        i++;
        a=a+i;
        printf("%d\t",a);
    }while(i<4);
}

        if (m>=50){
            a= m/50;
            m= m-a*50;
            printf("%d \n", a);
        }

        if (m>=25){
            a= m/25;
            m= m-a*25;
            printf("%d \n", a);
        }

        if (m>=10){
            a= m/10;
            m= m-a*10;
            printf("%d \n", a);
        }
}

