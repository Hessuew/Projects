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
public class Person5_4 {
    
    private String nimi;
    private int ikä;  
    

    public Person5_4() {
    }

    public Person5_4(String nimi, int ikä) {
        this.nimi = nimi;
        this.ikä = ikä;
    }

    public String getNimi() {
        return nimi;
    }

    public void setNimi(String nimi) {
        this.nimi = nimi;
    }

    public int getIkä() {
        return ikä;
    }

    public void setIkä(int ikä) {
        this.ikä = ikä;
    }
    
    @Override
    public String toString(){
        return "Person{" + "nimi=" + nimi + ", ika=" + ikä + '}';
    }
void lueTiedot(Person5_4 m) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    Person5_4 lisääTiedot(Person5_4 m) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }    
    
}
