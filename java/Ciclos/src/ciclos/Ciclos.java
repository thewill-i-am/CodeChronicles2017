/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ciclos;

import javax.swing.JOptionPane;

/**
 *
 * @author Cuarto Desarrollo
 */
public class Ciclos {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
      int i=0;
      for(i=1;i<=100;i++){
          if(i%2==0){
          JOptionPane.showMessageDialog(null,i);
      }
    }
    }
}
    