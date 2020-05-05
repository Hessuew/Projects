/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Kotitehtävät;

import java.util.ArrayList;


/**
 *
 * @author s709410
 */

public class Persons5_4 {
    
    Person5_4 s;
 
private ArrayList<Person5_4> henkilot = new ArrayList<Person5_4>();
    
public synchronized Person5_4 lueTiedot(){
      
        while(henkilot.isEmpty()){
            try {
                wait();
            } catch (Exception e) {}
        }Person5_4 luettu = henkilot.remove(0);
        notifyAll();
        return luettu;
    }   

    public synchronized void lisääTiedot(Person5_4 s){
            try {
            henkilot.add(s);
            notifyAll();
            wait();
        } catch (Exception e) {}        
    }    
}
