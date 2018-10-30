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
public class Main5_1 {
    
    
    public interface ILaite{
        public int ika();
    }
    public interface ISahkoLaite{
        public int virrankulut();
    }    
    
    public static void main(String[] args) {
            
        Laite5_1[] taulu = new  Laite5_1[4];
        Sahkovatkain5_1 a = new Sahkovatkain5_1();
        Potkulauta5_1 b = new Potkulauta5_1();
        SahkoPatteri5_1 c = new SahkoPatteri5_1();
        
        taulu[0] = a;
        taulu[1] = b;
        taulu[2] = c;
        
        a.setAanenvoimakkuus(12);
        a.setHankintapvm(a.now);
        a.setMaxKnopeus(50);
        a.setNimi("HyvaVatkain");
        a.setTunnit(23);
        a.setTunnus("123");
        a.setVirrankulutus(0);
        
        
        for (int i = 0; i < 3; i++) {
            Laite5_1 x = taulu[i];
            if ( x instanceof Sahkovatkain5_1){
                System.out.println(x.toString());
        }
        }
    }
}
