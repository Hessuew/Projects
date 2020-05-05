/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Kotitehtävät;

import java.io.IOException;

/**
 *
 * @author s709410
 */
public class Main5_3 {
    
    public static void main(String[] args) throws IOException {    
        TiedostonLuku5_3 tl = new TiedostonLuku5_3(3000);
        tl.start();
    
    
            Thread thread = new Thread() {
            @Override
            public void run() {
                System.out.println("Thread Running..");
            }
        };
            thread.start();
   
    }
}
