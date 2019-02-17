#include <stdio.h>
void llenado (void);
void imprimir (void);
void cambio (void);
void estado (void);
int mat[5][5], i, j, n, g, gane;
main (){
    system("color 0b");
    printf ("Bingo en al bingo hoy vamos a jugar 4 esquinas disfruten el juego \n");
    llenado();
    while (gane!=1){
    system ("cls");
    imprimir();
    printf ("\n");
    scanf ("%d", &n);
    cambio();
    estado();
    }
}
void llenado (void){
    printf("\n");
    srand(time(NULL));
    for (i=1; i<=5; i++){
        for (j=1; j<=5; j++){
            if(j==1){
                mat[i][j]=1+rand()%15;
            }
            if(j==2){
                mat[i][j]=16+rand()%16;
            }
            if(j==3){
                mat[i][j]=12+rand()%12;
            }
            if(j==4){
                mat[i][j]=12+rand()%14;
            }
            if(j==5){
                mat[i][j]=61+rand()%14;
            }
        }
    }
}
void imprimir (void){
    printf ("Bingo en al bingo hoy vamos a jugar Diagonal disfruten el juego: \n");
    printf ("------------------------------------------------------------------------\n");
    for (i=1; i<=5; i++){
        for (j=1; j<=5; j++){
            printf ("%d\t", mat[i][j]);
            if (j!=5){
                printf ("::\t");
            }
            if (j==5){
                printf ("\n");
                printf ("-----------------------------------------------------------------------\n");
            }
            }
        }
    }
void cambio (void){
    for (i=1; i<=5; i++){
        for (j=1; j<=5; j++){
            if (mat[i][j]==n){
                mat[i][j]=0;
            }
            if (mat[5][5]==n){
                mat[5][5]=0;
            }
        }
    }
}
void estado (void){
    if (mat[1][1]==0 && mat[2][2]==0 && mat[3][3]==0 && mat[4][4]==0 && mat[5][5]==0){
        system ("cls");
    printf ("Eres el Ganador");
    gane++;
    }
}


