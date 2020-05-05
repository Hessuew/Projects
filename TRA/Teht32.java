package Oma;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.util.*;
/**
 *
 * @author Juhani
 */
public class Teht32 {
    // PÃ¤Ã¤ohjelman kÃ¤yttÃ¶:
    // java TraI_18_t32_33 [N] [N2] [S]
    // missÃ¤ N on alkioiden mÃ¤Ã¤rÃ¤, N2 on alkoiden mÃ¤Ã¤rÃ¤ toisessa taulukossa
    // ja S on satunnaislukusiemen
    public static void main(String[] args) {

        // taulukoiden koko
        int n1 = 10;
        if (args.length > 0)
            n1 = Integer.valueOf(args[0]);

        int n2 = n1+2;
        if (args.length > 1)
            n2 = Integer.valueOf(args[1]);

        // satunnaislukusiemen
        int siemen = 42;
        if (args.length > 2)
            siemen = Integer.valueOf(args[2]);


        // testataan ensin kokonaisluvuilla

        LinkedList<Integer> L1 = new LinkedList<Integer>();
        LinkedList<Integer> L2 = new LinkedList<Integer>();

        // tÃ¤ytetÃ¤Ã¤n alkioilla
        Random r = new Random(siemen);
        for (int i = 0; i < n1; i++) {
            L1.add(r.nextInt(n1));
        }

        for (int i = 0; i < n2; i++) {
            L2.add(r.nextInt(n2 * 2));
        }

        
        // tulostetaan taulukot jos alkioita ei ole paljoa
        if (n1 <= 20 && n2 <= 20) {
            System.out.println("L1: " + L1);
            System.out.println("L2: " + L2);
        }

        // testataan tehtÃ¤vÃ¤Ã¤ 33
        List LL = leikkaus(L1, L2);

        System.out.print("TehtÃ¤vÃ¤ 33, L1 leikkaus L2");
        if (n1 <= 20 && n2 <= 20) {
            System.out.println(LL);
        } else {
            System.out.println(LL.size() + " alkiota");
        }

        // testataan tehtÃ¤vÃ¤Ã¤ 32
        poistaKaikki32(L1, L2);

        System.out.print("TehtÃ¤vÃ¤ 32, L1-L2");
        if (n1 <= 20 && n2 <= 20) {
            System.out.println(L1);
        } else {
            System.out.println(L1.size() + " alkiota");
        }

    } // main()



    /**
     * Listojen leikkaus.
     * @param A syÃ¶telista
     * @param B syÃ¶telista
     * @return yhteiset alkiot samassa jÃ¤rjestyksessÃ¤ kuin olivat listassa A
     */
    public static List leikkaus(List A, List B) {

        // tÃ¤ssÃ¤ vaihteeksi parametrina mikÃ¤ vain lista ja tuloslistaksi
        // tehdÃ¤Ã¤n samanlainen listatoteutus kuin mitÃ¤ oli A.
        List tulos = null;
        try {
            tulos = A.getClass().newInstance();
        } catch (Exception e) {};
        
            HashSet a = new HashSet(); 
            HashSet a2 = new HashSet();
            for (Object x : A)
            a.add(x);
            for (Object x : B)
            a2.add(x);
            
            for (Object b : a2) a.remove(b);
            
            tulos.addAll(a);

        return  tulos;

    }


    /**
     * Poista kaikki L2 alkioiden esiintymÃ¤t listasta L1.
     * @param L1 lista josta poistetaan
     * @param L2 alkiot jotka poistetaan
     */
    public static void poistaKaikki32(LinkedList L1, Collection L2) {
        HashSet a = new HashSet();
        HashSet a2 = new HashSet();
        for (Object x : L1)
            a.add(x);
        for (Object x : L2)
            a2.add(x);
        
        for (Object b : a2) a.remove(b);
        L1.clear();
        
        L1.addAll(a);
    }
}
