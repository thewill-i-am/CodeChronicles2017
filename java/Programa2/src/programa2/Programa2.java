/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package programa2;

import javax.swing.JOptionPane;

/**
 *
 * @author Cuarto Desarrollo
 */
public class Programa2 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        float b;
        double c=3.14;
        b=Float.parseFloat(JOptionPane.showInputDialog("Introduzca el radio"));
       double a;
        a = b*b*c;
        JOptionPane.showMessageDialog(null, "El area es "+a);
    }
}
