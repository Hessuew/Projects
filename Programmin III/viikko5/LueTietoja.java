/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Kotitehtävät;

/**
 *
 * @author s709410
 */
public class LueTietoja extends Thread{
    Persons5_4 ps;
    Person5_4 p;

    public LueTietoja(Persons5_4 ps) {
        this.ps = ps;
    } 
    
@Override 
    public void run(){
    while (true) {        
        try {
            Person5_4 m = ps.lueTiedot();
            System.out.println(m);
            System.out.println("Bingo, nysse tuli!!!"); 
            
            Thread.sleep(2000);            
        } catch (Exception e) {}   
    }
}    
}
