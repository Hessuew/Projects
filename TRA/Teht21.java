<<<<<<< HEAD
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Oma;

import fi.uef.cs.tra.ListNode;
import fi.uef.cs.tra.TraLinkedList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Random;

/**
 *
 * @author Juhani
 */
public class Teht21 {
    public static void main(String[] args) {

        // listojen koko
        int N = 15;
        if (args.length > 0)
            N = Integer.valueOf(args[0]);

        // satunnaislukusiemen
        int siemen = 42;
        if (args.length > 1)
            siemen = Integer.valueOf(args[1]);

        int pituus = 1;

        if (N > 30)
            pituus = 2;

        // luodaan esimerkkitaulukot
        String[] T1 = new String[N];
        String[] T2 = new String[N];

        // tÃ¤ytetÃ¤Ã¤n alkioilla
        Random r = new Random(siemen);
        for (int i = 0; i < N; i++) {
            T1[i] = randomString(r, pituus);
            T2[i] = randomString(r, pituus);
        }

        Arrays.sort(T1);
        Arrays.sort(T2);


        // tulostetaan taulukot
        if (N <= 40) {
            System.out.print("T1:   ");
            for (int i = 0; i < N; i++)
                System.out.print(" " + T1[i]);
            System.out.println();

            System.out.print("T2:   ");
            for (int i = 0; i < N; i++)
                System.out.print(" " + T2[i]);
            System.out.println();
        }

        // Muodostetaan taulukoista TraLinkedList:t ja LinkedList:t

        TraLinkedList<String> L1 = new TraLinkedList<String>();
        TraLinkedList<String> L2 = new TraLinkedList<String>();
        for (String x : T1)
            L1.insert(L1.EOL, x);
        for (String x : T2)
            L2.insert(L2.EOL, x);


        // kutsutaan tehtÃ¤vÃ¤Ã¤ 21
        int pois = poistaKaikki(L1, L2);
        if (N <= 20) {
            System.out.print("L1-L2:   ");
            for (String x1 : L1)
                System.out.print(" " + x1);
            System.out.println();
        }
        System.out.println("Poistettiin " + pois + " kpl.");

    } // main()


    // palauttaa satunnaisen len mittaisen merkkijonon
    public static String randomString(Random r, int len) {
        char[] C = new char[len];
        for (int i = 0; i < len; i++)
            C[i] = (char)(r.nextInt(26) + 'a');
        return new String(C);
    }



    /**
      * 21. Poistaa listasta L1 kaikki alkiot jotka lÃ¶ytyvÃ¤t listasta L2.
      * Molemmat listat ovat kasvavassa jÃ¤rjestyksessÃ¤.
      * @param L1 ensimmÃ¤inen lista
      * @param L2 toinen lista
      * @return poistettujen alkioiden mÃ¤Ã¤rÃ¤
      */
    public static <E extends Comparable<? super E>>
            int poistaKaikki(TraLinkedList<E> L1, TraLinkedList<E> L2) {

        int poistettu = 0;
        
        ListNode<E> p1 = L1.first();
        ListNode<E> p2 = L2.first();
        
        while (p1 != L1.EOL && p2 != L2.EOL) {            
            ListNode<E> q = L2.first();
            
        while (p1 != L1.EOL && p2 != L2.EOL) {            
            
            int cmp = p1.getElement().compareTo(p2.getElement());
            if(cmp == 0){
            ListNode<E> r = p1;
            p1 = p1.next();
            L1.remove(r);
            poistettu++;
            } else if (cmp<0)
                p1 = p1.next();
            else 
                p2 = p2.next();
        } 
        }
        return poistettu;

    } // poistaKaikki()
}
=======
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Oma;

import fi.uef.cs.tra.ListNode;
import fi.uef.cs.tra.TraLinkedList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Random;

/**
 *
 * @author Juhani
 */
public class Teht21 {
    public static void main(String[] args) {

        // listojen koko
        int N = 15;
        if (args.length > 0)
            N = Integer.valueOf(args[0]);

        // satunnaislukusiemen
        int siemen = 42;
        if (args.length > 1)
            siemen = Integer.valueOf(args[1]);

        int pituus = 1;

        if (N > 30)
            pituus = 2;

        // luodaan esimerkkitaulukot
        String[] T1 = new String[N];
        String[] T2 = new String[N];

        // tÃ¤ytetÃ¤Ã¤n alkioilla
        Random r = new Random(siemen);
        for (int i = 0; i < N; i++) {
            T1[i] = randomString(r, pituus);
            T2[i] = randomString(r, pituus);
        }

        Arrays.sort(T1);
        Arrays.sort(T2);


        // tulostetaan taulukot
        if (N <= 40) {
            System.out.print("T1:   ");
            for (int i = 0; i < N; i++)
                System.out.print(" " + T1[i]);
            System.out.println();

            System.out.print("T2:   ");
            for (int i = 0; i < N; i++)
                System.out.print(" " + T2[i]);
            System.out.println();
        }

        // Muodostetaan taulukoista TraLinkedList:t ja LinkedList:t

        TraLinkedList<String> L1 = new TraLinkedList<String>();
        TraLinkedList<String> L2 = new TraLinkedList<String>();
        for (String x : T1)
            L1.insert(L1.EOL, x);
        for (String x : T2)
            L2.insert(L2.EOL, x);


        // kutsutaan tehtÃ¤vÃ¤Ã¤ 21
        int pois = poistaKaikki(L1, L2);
        if (N <= 20) {
            System.out.print("L1-L2:   ");
            for (String x1 : L1)
                System.out.print(" " + x1);
            System.out.println();
        }
        System.out.println("Poistettiin " + pois + " kpl.");

    } // main()


    // palauttaa satunnaisen len mittaisen merkkijonon
    public static String randomString(Random r, int len) {
        char[] C = new char[len];
        for (int i = 0; i < len; i++)
            C[i] = (char)(r.nextInt(26) + 'a');
        return new String(C);
    }



    /**
      * 21. Poistaa listasta L1 kaikki alkiot jotka lÃ¶ytyvÃ¤t listasta L2.
      * Molemmat listat ovat kasvavassa jÃ¤rjestyksessÃ¤.
      * @param L1 ensimmÃ¤inen lista
      * @param L2 toinen lista
      * @return poistettujen alkioiden mÃ¤Ã¤rÃ¤
      */
    public static <E extends Comparable<? super E>>
            int poistaKaikki(TraLinkedList<E> L1, TraLinkedList<E> L2) {

        int poistettu = 0;
        
        ListNode<E> p1 = L1.first();
        ListNode<E> p2 = L2.first();
        
        while (p1 != L1.EOL && p2 != L2.EOL) {            
            ListNode<E> q = L2.first();
            
        while (p1 != L1.EOL && p2 != L2.EOL) {            
            
            int cmp = p1.getElement().compareTo(p2.getElement());
            if(cmp == 0){
            ListNode<E> r = p1;
            p1 = p1.next();
            L1.remove(r);
            poistettu++;
            } else if (cmp<0)
                p1 = p1.next();
            else 
                p2 = p2.next();
        } 
        }
        return poistettu;

    } // poistaKaikki()
}
>>>>>>> 1bf856ecefdaa92726ff825197de633742624cf0
