/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entrada;

import java.util.Calendar;
import javax.swing.JOptionPane;

/**
 *
 * @author Cuarto Desarrollo
 */
public class Entrada {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        int hora,minuto,segundo;
        Calendar calendario=Calendar.getInstance();
        hora=calendario.get(Calendar.HOUR_OF_DAY);
        minuto=calendario.get(Calendar.MINUTE);
        segundo=calendario.get(Calendar.SECOND);
        JOptionPane.showMessageDialog(null, "hora: "+hora+"Minuto: "+minuto+"segundo "+segundo);
        
    }
    
}

