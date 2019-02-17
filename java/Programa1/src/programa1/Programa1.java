/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package programa1;

import javax.swing.JOptionPane;

/**
 *
 * @author Cuarto Desarrollo
 */
public class Programa1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        int a=0;
        float b=0;
        String c="";
        c=JOptionPane.showInputDialog(null, "Introduzca su nombre!");
        a=Integer.parseInt(JOptionPane.showInputDialog("Introduzca su edad"));
        b=Float.parseFloat(JOptionPane.showInputDialog("Introduzca su salario"));
        JOptionPane.showMessageDialog(null, "Hola "+c+" años: "+a+" Salario: "+b);
    }
    
}
