/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package determinar.posicion;

import java.util.Random;
import javax.swing.JOptionPane;

/**
 *
 * @author Cuarto Desarrollo
 */
public class DeterminarPosicion {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        int vec[],i,vec2[];
        vec2=new int[10];
        int num=0;
        String res="";
        Random rand = new Random();
        int aleatorio= 0;
        int po=0;
       for(i=0;i<vec2.length;i++){
           vec2[i]= rand.nextInt(15) + (1);
           aleatorio=vec2[i];
            JOptionPane.showMessageDialog(null, "Numeros: "+aleatorio);
           
              if(aleatorio>num){
                num=aleatorio;
                po=i;
              } 
       }
      
       JOptionPane.showMessageDialog(null, "El numero mayor: "+num);
       JOptionPane.showMessageDialog(null, "La posicion: "+ po);
        
    }
}