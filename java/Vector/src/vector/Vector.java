/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vector;

import java.util.Random;
import javax.swing.JOptionPane;
import static javax.swing.JOptionPane.showInputDialog;

/**
 *
 * @author Cuarto Desarrollo
 */
public class Vector {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        int vec[],i,vec2[];
        vec=new int[6];
        vec2=new int[6];
        String res="";
        Random rand = new Random();
        int aleatorio= 0;
        for(i=0;i<vec.length;i++){
            vec[i]=Integer.parseInt(JOptionPane.showInputDialog("Ingrese un numero"));
            res=res+vec[i]+"";
        }
       for(i=0;i<vec2.length;i++){
           vec2[i]= rand.nextInt(15) + (1);
       }
        for(i=0;i<vec2.length;i++){
           JOptionPane.showMessageDialog(null, "Numeros: "+vec2[i]);
       }
        JOptionPane.showMessageDialog(null, "Numeros: "+res);
       } 
    }
    
