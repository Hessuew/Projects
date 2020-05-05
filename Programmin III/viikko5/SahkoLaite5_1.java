/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Kotitehtävät;

import java.util.Date;

/**
 *
 * @author s709410
 */
public abstract class SahkoLaite5_1 extends Laite5_1 implements Main5_1.ISahkoLaite{
    private int virrankulutus;
    private enum kaynnissa {ei, kyllä};
    private kaynnissa kayko = kaynnissa.ei;
    private int tunnit;
    

    @Override
    public int virrankulut(){
        return tunnit;
    }

    public SahkoLaite5_1(int virrankulutus, int tunnit) {
        this.virrankulutus = virrankulutus;
        this.tunnit = tunnit;
    }

    public int getVirrankulutus() {
        return virrankulutus;
    }

    public void setVirrankulutus(int virrankulutus) {
        this.virrankulutus = virrankulutus;
    }

    public kaynnissa getKayko() {
        return kayko;
    }

    public void setKayko(kaynnissa kayko) {
        this.kayko = kayko;
    }

    public int getTunnit() {
        return tunnit;
    }

    public void setTunnit(int tunnit) {
        this.tunnit = tunnit;
    }
    

    public SahkoLaite5_1() {
    }    

    @Override
    public String toString(){
        return super.toString() + " " + virrankulutus + " " + kayko;
    }
}
