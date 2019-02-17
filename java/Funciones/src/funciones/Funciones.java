/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package funciones;

import java.util.Random;
import javax.swing.JOptionPane;

/**
 *
 * @author Cuarto Desarrollo
 */
public class Funciones {

    /**
     * @param args the command line arguments
     */
    public static Integer i = 0;
    public static Integer j = 0;
    public static String resultado = "";
    public static String resultado2 = "";
    public static void main(String[] args) {
        
        int vec[];
        vec=new int[6];
        int mat[][];
        mat=new int[3][3];
        llenarVector(vec);
        llenarMatriz(mat);
        String desplegar = desplegarVector(vec);
        String desplegar2 = desplegarMatriz(mat);
         JOptionPane.showMessageDialog(null, "numero \n "+desplegar);
         JOptionPane.showMessageDialog(null, "numero \n"+desplegar2);
    }
        public static int capturaValor(){
        Random rand=new Random();
        int num = 0;
        num = rand.nextInt(75) + (1);
        return num;
}
         public static int llenarVector(int vec[]){
             for(i=0;i <vec.lenght; i++);{
             vec[i]=capturaValor();
         }
         }
         
          public static int llenaMatriz(int mat[]){
               for(i=0;i <vec.length; i++;){
               for(j=0;j <vec.length; j++;){
                vec[i][j]=capturaValor();
         }
          }    
          }
          
     
             public static String desplegarVecor(int vec[]){
                   for(i=0;i <vec.length;i++){
                       resultado= resultado +vec[i] + "";
                   }
                   return resultado;
}
              public static String desplegarMatriz(int mat[][]){
                   for(i=0;i <vec.length;i++){
                         for(j=0;j <vec.length;j++){
                       resultado2= resultado2 +vec[i] + "";
                   }
                          resultado2= resultado2 + "\n";
                   }
                   return resultado2;
              }
}