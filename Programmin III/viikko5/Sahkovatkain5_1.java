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
public class Sahkovatkain5_1 extends SahkoLaite5_1{
    private int maxKnopeus;
    private int Aanenvoimakkuus;

    public int getMaxKnopeus() {
        return maxKnopeus;
    }

    public void setMaxKnopeus(int maxKnopeus) {
        this.maxKnopeus = maxKnopeus;
    }

    public int getAanenvoimakkuus() {
        return Aanenvoimakkuus;
    }

    public void setAanenvoimakkuus(int Aanenvoimakkuus) {
        this.Aanenvoimakkuus = Aanenvoimakkuus;
    }

    public Sahkovatkain5_1(int maxKnopeus, int Aanenvoimakkuus) {
        this.maxKnopeus = maxKnopeus;
        this.Aanenvoimakkuus = Aanenvoimakkuus;
    }

    public Sahkovatkain5_1() {
    }
    
    @Override
    public String toString(){
        return super.toString() + " " + maxKnopeus + " " + Aanenvoimakkuus;
    }

    @Override
    public int ika() {
        return ika();
    }

    @Override
    public int virrankulut() {
        return virrankulut();
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
public class Sahkovatkain5_1 extends SahkoLaite5_1{
    private int maxKnopeus;
    private int Aanenvoimakkuus;

    public int getMaxKnopeus() {
        return maxKnopeus;
    }

    public void setMaxKnopeus(int maxKnopeus) {
        this.maxKnopeus = maxKnopeus;
    }

    public int getAanenvoimakkuus() {
        return Aanenvoimakkuus;
    }

    public void setAanenvoimakkuus(int Aanenvoimakkuus) {
        this.Aanenvoimakkuus = Aanenvoimakkuus;
    }

    public Sahkovatkain5_1(int maxKnopeus, int Aanenvoimakkuus) {
        this.maxKnopeus = maxKnopeus;
        this.Aanenvoimakkuus = Aanenvoimakkuus;
    }

    public Sahkovatkain5_1() {
    }
    
    @Override
    public String toString(){
        return super.toString() + " " + maxKnopeus + " " + Aanenvoimakkuus;
    }

    @Override
    public int ika() {
        return ika();
    }

    @Override
    public int virrankulut() {
        return virrankulut();
    }
    
}
>>>>>>> 1bf856ecefdaa92726ff825197de633742624cf0
