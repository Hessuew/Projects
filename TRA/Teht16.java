/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapplication1;

import fi.uef.cs.tra.ListNode;
import fi.uef.cs.tra.TraLinkedList;
import java.util.HashSet;
import java.util.Random;

/**
 *
 * @author s709410
 */
public class Teht16 {

public static void main(String[] args) {

        // listojen koko
        int N = 15;
        if (args.length > 0)
            N = Integer.valueOf(args[0]);

        // satunnaislukusiemen
        int siemen = 42;
        if (args.length > 1)
            siemen = Integer.valueOf(args[1]);

        // saako olla samoja alkioita
        int eri = 0;
        if (args.length > 2)
            eri = 1;

        int pit = 1; // merkkijonon pituus
        if (N > 20)
            pit++;
        if (N > 500)
            pit++;

        Random r = new Random(siemen);

        // Muodostetaan TraLinkedList:it

        TraLinkedList<String> L1 = new TraLinkedList<String>();
        TraLinkedList<String> L2 = new TraLinkedList<String>();
        for(int i = 0; i < N; i++) {
            L1.insert(L1.EOL, randomString(r, pit));
            L2.insert(L2.EOL, randomString(r, pit));
        }

        if (N <= 20) {
            System.out.print("L1:");
            for (String x : L1)
                System.out.print(" " + x);
            System.out.println();

            System.out.print("L2:");
            for (String x : L2)
                System.out.print(" " + x);
            System.out.println();
        }



        // kutsutaan tehtÃ¤vÃ¤Ã¤ 16
        poistaKaikki(L1, L2);
        if (N <= 20) {
            System.out.print("L1-L2:   ");
            for (String x1 : L1)
                System.out.print(" " + x1);
            System.out.println();
        }




    } // main()


    // palauttaa satunnaisen len mittaisen merkkijonon
    public static String randomString(Random r, int len) {
        char[] C = new char[len];
        for (int i = 0; i < len; i++)
            C[i] = (char)(r.nextInt(26) + 'a');
        return new String(C);
    }




    /**
      * 15.
      * Poistaa listasta L1 kaikki alkiot jotka lÃ¶ytyvÃ¤t listasta L2
      * @param L1 ensimmÃ¤inen lista
      * @param L2 toinen lista
      */
    public static <E> void poistaKaikki(TraLinkedList<E> L1, TraLinkedList<E> L2) {

        ListNode p = L1.first();
           while (p != L1.EOL) {  
               ListNode q = L2.first();
              
               if (q.getElement().equals(p.getElement())) {
                    break;
               } else
                   q = q.next();
           }
           if (q != L2.EOL) {
              ListNode r = p;
              p = p.next();
              L1.remove(r);
        }
           p = p.next();


    } // poistaKaikki()



}

        HashSet<E> HS = new HashSet<E;
        for (E x; L2)
            HS.add(x);
        
        ListNode<E> p = L1.first();
           while (p != L1.EOL) {  
               ListNode q = L2.first();
               if (Hs.getElement().equals(p.getElement())) {
                   ListNode<E> r = p;
                   p = p.next();
                   L1.remove(r);
               } else
                   p = p.next();
           } 