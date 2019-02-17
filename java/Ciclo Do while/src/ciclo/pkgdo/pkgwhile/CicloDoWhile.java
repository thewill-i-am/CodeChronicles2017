/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ciclo.pkgdo.pkgwhile;

import javax.swing.JOptionPane;

/**
 *
 * @author Cuarto Desarrollo
 */
public class CicloDoWhile {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
      int i=99;
       do{
           i++;
               	if((i%10==0)){
                    JOptionPane.showMessageDialog(null,i);
                         }
} while (i<=1000);
	   
    }
    
}