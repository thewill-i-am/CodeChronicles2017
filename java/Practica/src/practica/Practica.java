/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package practica;

import javax.swing.JOptionPane;

/**
 *
 * @author Cuarto Desarrollo
 */
public class Practica {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        int i=0;
        int po=0;
        int[] vec = new int[5];
        int num=0;
        String nom[];
        nom=new String[5];
        String res=" ";
        String res2=" ";
        nom[0]="Juan ";
        nom[1]="Julian ";
        nom[2]="Marco ";
        nom[3]="Francisoco ";
        nom[4]="Isco";
        for(i=0;i<nom.length;i++){
            res=res+nom[i]+"";
        }
        JOptionPane.showMessageDialog(null,"Nombres: "+res);
      
                for(i=0;i<vec.length;i++){
            vec[i]=Integer.parseInt(JOptionPane.showInputDialog("Digite edades"));
            res2=res2+vec[i]+"";
        }
                JOptionPane.showMessageDialog(null, "Nombre: "+nom[0]+" edad: "+vec[0]+" Nombre: "+nom[1]+" edad: "+vec[1]+" Nombre: "+nom[2]+" edad: "+vec[2]+" Nombre: "+nom[3]+" edad: "+vec[3]+" Nombre: "+nom[4]+" edad: "+ vec[4]);
                 if(num<=res2){
                num=vec[po];
                po = i;
                  JOptionPane.showMessageDialog(null, "El numero mayor: "+num);
                  JOptionPane.showMessageDialog(null, "La posicion: "+ po);
                  else{
                if(vec[po]<num){
                num=vec[po];
                po = i;
                  JOptionPane.showMessageDialog(null, "El numero mayor: "+num);
                  JOptionPane.showMessageDialog(null, "La posicion: "+ po);
                          }
                          }
                 }
              } 
                
       }
   

