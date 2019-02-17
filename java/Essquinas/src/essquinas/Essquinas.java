/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package essquinas;

import javax.swing.JOptionPane;

/**
 *
 * @author Cuarto Desarrollo
 */
public class Essquinas {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
       int mat[][],i,j;
       String lol="";
        mat=new int[4][4];
        String res="";
        for(i=0;i<mat.length;i++){
               for(j=0;j<mat.length;j++){
            mat[i][j]=Integer.parseInt(JOptionPane.showInputDialog("Ingrese un valor"));
            res=res+mat[i][j]+"";
            if(i==j || i==1 && j==4 || j==i  ){
                lol=lol+mat[j][i];
                
     
        }
           lol=lol+"\n";
    }
    JOptionPane.showMessageDialog(null,lol);
    }
    }
}
