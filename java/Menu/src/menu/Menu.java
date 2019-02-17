/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package menu;

import javax.swing.JOptionPane;

/**
 *
 * @author Cuarto Desarrollo
 */
public class Menu {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        int men;
        do{
            men=Integer.parseInt(JOptionPane.showInputDialog("Practicas: \n"
                    +"1.Ejercicio 1\n"
                    +"2.Ejercicio 2\n"
                    +"3.Ejercicio 3\n"
                    +"4.Ejercicio 4\n"
                    +"5.Salir \n"));
                   switch(men){
                       case 1:
                           JOptionPane.showMessageDialog(null,"Ejercicio 1\n");
                          break;
                           case 2:
                           JOptionPane.showMessageDialog(null,"Ejercicio 2\n");
                          break;
                           case 3:
                           JOptionPane.showMessageDialog(null,"Ejercicio 3\n");
                          break;
                           case 4:
                           JOptionPane.showMessageDialog(null,"Ejercicio 4\n");
                          break;
                           case 5:
                           JOptionPane.showMessageDialog(null,"Bye\n");
                          break;
                           default:
                                JOptionPane.showMessageDialog(null,"Ingrese un valor correcto\n");
                           break;
                   }
        }while(men!=5);
                   }
    
}
