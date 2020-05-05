<<<<<<< HEAD
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
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.File;

public class TiedostonLuku5_3 extends Thread{
    
    private int interval;

    public TiedostonLuku5_3(int interval) {
        this.interval = interval;
    }
    
    @Override 
    public void run(){
    while (true) {        
        try {
            BufferedReader br = null;
        try {
            File file = new File("C:\\temp\\nimet.txt");
            br = new BufferedReader(new FileReader("C:\\temp\\nimet.txt"));
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
            br.close();
            file.delete();
            Thread.sleep(interval);            
        } catch (IOException e) {
        } 
        } catch (Exception e) {}          
    }
}
}
=======
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
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.File;

public class TiedostonLuku5_3 extends Thread{
    
    private int interval;

    public TiedostonLuku5_3(int interval) {
        this.interval = interval;
    }
    
    @Override 
    public void run(){
    while (true) {        
        try {
            BufferedReader br = null;
        try {
            File file = new File("C:\\temp\\nimet.txt");
            br = new BufferedReader(new FileReader("C:\\temp\\nimet.txt"));
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
            br.close();
            file.delete();
            Thread.sleep(interval);            
        } catch (IOException e) {
        } 
        } catch (Exception e) {}          
    }
}
}
>>>>>>> 1bf856ecefdaa92726ff825197de633742624cf0
