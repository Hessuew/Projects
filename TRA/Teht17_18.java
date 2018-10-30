/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapplication1;

import fi.uef.cs.tra.ListNode;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.ListIterator;

/**
 *
 * @author s709410
 */
public class Teht17_18 {


    // PÃ¤Ã¤ohjelman kÃ¤yttÃ¶:
    // java traI_traI_18_17_18 [N] [S]
    // missÃ¤ N on alkioiden mÃ¤Ã¤rÃ¤, 
    // ja S on satunnaislukusiemen
    public static void main(String[] args) {

        // taulukoiden koko
        int N = 11;
        if (args.length > 0)
            N = Integer.valueOf(args[0]);

        // satunnaislukusiemen
        int siemen = 42;
        if (args.length > 1)
            siemen = Integer.valueOf(args[1]);

        java.util.Random r = new java.util.Random(siemen);
        // muodostetaan LinkedList:it
        LinkedList<Integer> L1 = new LinkedList<Integer>();
        LinkedList<Integer> L2 = new LinkedList<Integer>();
        for (int i = 0 ; i < N; i++) {
            L1.add(r.nextInt(N));
            L2.add(r.nextInt(N + 5));
        }

        if (N <= 20) {
            System.out.println("L1:" + L1);
            System.out.println("L2:" + L2);
        }


        // tehtÃ¤vÃ¤n 17 testaus
        System.out.println("\nPoistetaan");
        int pois = poistaKaikki(L1, L2);

        if (N <= 20) {
            System.out.println("L1:" + L1);
            System.out.println("L2:" + L2);
        }
        System.out.println("Poistettu " + pois + " kpl");




        // tehtÃ¤vÃ¤n 18 testaus

        Integer suurin1 = poistaSuurin(L2);
        System.out.println("Suurin oli: " + suurin1);
        if (N <= 20) {
            for (Integer x : L2)
                System.out.print(" " + x);
            System.out.println();
        } else
            System.out.println(L2.size() + " alkiota");

        Integer suurin2 = poistaSuurin(L2);
        System.out.println("Suurin oli: " + suurin2);
        if (N <= 20) {
            for (Integer x : L2)
                System.out.print(" " + x);
            System.out.println();
        } else
            System.out.println(L2.size() + " alkiota");


    } // main()


    public static <E> int poistaKaikki(Collection<E> A, Collection<E> B) {
        int pois = 0;

        for(E x : B)
            while (A.remove(x)) {                
                pois++;
            }



        return pois;
    }

    public static <E extends Comparable<? super E>> E poistaSuurin(Collection<E> C) {

        Iterator<E> i = C.iterator();
        E max = null;

        while (i.hasNext()) {            
             E x = i.next();
             if(max == null || x.compareTo(max) > 0){
                 max = x;
             }
        } if (max != null) {
            C.remove(max);
        }
            
        return max;
    } // poistaSuurin()


} // class

