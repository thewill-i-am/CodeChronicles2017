/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package romanos;

import java.util.Random;
import javax.swing.JOptionPane;

/**
 *
 * @author Cuarto Desarrollo
 */
public class ROMANOS {

    /**
     * @param args the command line arguments
     */
        public static void main(String[] args) {
        int i=0;
        int a=0;
        int resultado=0;
        String nom[];
        nom=new String[7];
        String res=" ";
        nom[0]="l";
        nom[1]="V";
        nom[2]="X";
        nom[3]="L";
        nom[4]="C";
        nom[5]="D";
        nom[6]="M";
        for(i=0;i<nom.length;i++){
            res=res+nom[i]+"";
        }
        JOptionPane.showMessageDialog(null,"Nombres: "+res);
         a=Integer.parseInt(JOptionPane.showInputDialog("Ingrese un numero"));
        JOptionPane.showMessageDialog(null,"Numero: "+a);
        resultado=(resultado/10);
        if(res)
          JOptionPane.showMessageDialog(null,"NumeroxA: "+nom[resultado]);
          
       
    }
         }
       
  
