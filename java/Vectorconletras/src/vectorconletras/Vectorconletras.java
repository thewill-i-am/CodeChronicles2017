/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vectorconletras;

import javax.swing.JOptionPane;

/**
 *
 * @author Cuarto Desarrollo
 */
public class Vectorconletras {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        int i=0;
        String nom[];
        nom=new String[5];
        String res=" ";
        nom[0]="Juan ";
        nom[1]="Julian ";
        nom[2]="Marco ";
        nom[3]="Francisoco ";
        nom[4]="Isco";
        for(i=0;i<nom.length;i++){
            res=res+nom[i]+"";
        }
        JOptionPane.showMessageDialog(null,"Nombres: "+res);
    }
    
    
}
