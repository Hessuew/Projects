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

public class Main5_4 {
    
    public static void main(String[] args) {
 
      Persons5_4 ps = new Persons5_4();
      Lisaatietoja l = new Lisaatietoja(ps);
      l.start();

      LueTietoja lue = new LueTietoja(ps);
      lue.start();
    
    Thread thread = new Thread() {
            @Override
            public void run() {
                System.out.println("Thread Running..");
            }
        };    
    thread.start();
    
    }
}
