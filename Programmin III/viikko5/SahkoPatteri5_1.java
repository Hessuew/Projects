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
public class SahkoPatteri5_1 extends SahkoLaite5_1{
    private String lammitysalue;

    public String getLammitysalue() {
        return lammitysalue;
    }

    public void setLammitysalue(String lammitysalue) {
        this.lammitysalue = lammitysalue;
    }

    public SahkoPatteri5_1() {
    }

    public SahkoPatteri5_1(String lammitysalue) {
        this.lammitysalue = lammitysalue;
    }
    
    @Override
    public String toString(){
        return super.toString() + " " + lammitysalue;
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
public class SahkoPatteri5_1 extends SahkoLaite5_1{
    private String lammitysalue;

    public String getLammitysalue() {
        return lammitysalue;
    }

    public void setLammitysalue(String lammitysalue) {
        this.lammitysalue = lammitysalue;
    }

    public SahkoPatteri5_1() {
    }

    public SahkoPatteri5_1(String lammitysalue) {
        this.lammitysalue = lammitysalue;
    }
    
    @Override
    public String toString(){
        return super.toString() + " " + lammitysalue;
    }

    @Override
    public int virrankulut() {
        return virrankulut();
    }
}
>>>>>>> 1bf856ecefdaa92726ff825197de633742624cf0
