/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Kotitehtävät;

import java.util.ArrayList;
import java.util.Scanner;


/**
 *
 * @author s709410
 */
public class Lisaatietoja extends Thread{

    Persons5_4 ps;
    Person5_4 p;    

    public Lisaatietoja(Persons5_4 ps) {
        this.ps = ps;
    }
    
    @Override
    public void run(){
    Scanner lukija;
    lukija = new Scanner(System.in);
    
        while (true) {            
            try {
                System.out.println("Anna nimi: ");
                 p.setNimi(lukija.nextLine());
                System.out.println("Anna ikä");
                p.setIkä(lukija.nextInt());
                lukija.nextLine();
                wait();                
            } catch (Exception e) {
            }
        }
    }
}
