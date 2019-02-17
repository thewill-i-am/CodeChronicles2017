/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ciclowhile;

import javax.swing.JOptionPane;

/**
 *
 * @author Cuarto Desarrollo
 */
public class Ciclowhile {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
       int i=0;
       int res=0;
       while (i<=50) {
           i++;
	if((i%2==1)){
        res=i;
	 JOptionPane.showMessageDialog(null,res);
    }
    
}
    }
}