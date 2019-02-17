/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package comparaciontexto3;

import javax.swing.JOptionPane;

/**
 *
 * @author Cuarto Desarrollo
 */
public class ComparacionTexto3 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        String genero="";
        String nombre="";
        nombre=JOptionPane.showInputDialog(null, "Digite su nombre");
        genero=JOptionPane.showInputDialog(null, "Digite su genero");
        if((genero.toLowerCase().compareTo("masculino")==0)) {
            JOptionPane.showMessageDialog(null, "Hola "+nombre+", eres un hombre");
        }
        else{
            if((genero.toLowerCase().compareTo("femenino")==0)) {
            JOptionPane.showMessageDialog(null, "Hola "+nombre+", eres una mujer");
        }
        }
    }
    
}
