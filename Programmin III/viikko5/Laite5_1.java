/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Kotitehtävät;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

/**
 *
 * @author s709410
 */
public abstract class Laite5_1 implements Main5_1.ILaite{
    LocalDate now = LocalDate.now();
    private String tunnus;
    private LocalDate hankintapvm;
    
    private String nimi;

    @Override
    public int  ika(){
        return now.getDayOfYear() - hankintapvm.getDayOfYear();
    }

    public String getTunnus() {
        return tunnus;
    }

    public void setTunnus(String tunnus) {
        this.tunnus = tunnus;
    }

    public LocalDate getHankintapvm() {
        return hankintapvm;
    }

    public void setHankintapvm(LocalDate hankintapvm) {
        this.hankintapvm = hankintapvm;
    }

    public String getNimi() {
        return nimi;
    }

    public void setNimi(String nimi) {
        this.nimi = nimi;
    }

    public Laite5_1(String tunnus, Date hankintapvm, String nimi) {
        this.tunnus = tunnus;
        this.hankintapvm = now;
        this.nimi = nimi;
    }

    public Laite5_1() {
    }

    @Override
    public String toString(){
        return tunnus + " " + hankintapvm + " " + nimi;
    }
}
