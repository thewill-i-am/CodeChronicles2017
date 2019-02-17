/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ventacomputadoras4;

import javax.swing.JOptionPane;

/**
 *
 * @author Cuarto Desarrollo
 */
public class VentaComputadoras4 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
              String marca="";
        String nombre="";
        double a=0.15;
        double b=0.13;
        double d=0.17;
        double c=0;
        marca=JOptionPane.showInputDialog(null, "Digite su marca");
        if((marca.toLowerCase().compareTo("toshiba")==0)) {
          c = a*300000;
           JOptionPane.showMessageDialog(null, "Su precio es "+c);
        }
        else{
             if((marca.toLowerCase().compareTo("hp")==0)) {
             c = b*350000;
           JOptionPane.showMessageDialog(null, "Su precio es "+c);
        }
             else{
             if((marca.toLowerCase().compareTo("apple")==0)) {
             c = d*600000;
           JOptionPane.showMessageDialog(null, "Su precio es "+c);
        }
             }
             }
         }
     }
