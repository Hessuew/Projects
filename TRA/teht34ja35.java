package Oma;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.util.*;
import java.util.Map.Entry;
/**
 *
 * @author Juhani
 */
public class teht34ja35 {
     public static void main(String[] args) {

        // taulukoiden koko
        int N = 20;
        if (args.length > 0)
            N = Integer.valueOf(args[0]);


        // satunnaislukusiemen
        int siemen = N;
        if (args.length > 2)
            siemen = Integer.valueOf(args[2]);


        Random r = new Random(siemen);
        LinkedList<Integer> L = new LinkedList<Integer>();

        // tÃ¤ytetÃ¤Ã¤n alkioilla
        for (int i = 0; i < N; i++) {
            L.add(r.nextInt(N/2));
        }

        // tulostetaan taulukot jos alkioita ei ole paljoa
        if (N <= 30) {
            System.out.println(L);
        }

        Integer yleisin = yleisin(L);

        System.out.println("Yleisin oli " + yleisin);

        poistaMonet(L, 2);
        if (N <= 30) {
            System.out.println("Yli 2kpl esiintymÃ¤t poistettu:");
            System.out.println(L);
        }



    } // main()


    /**
     * Yleisin alkio kokoelmasta.
     * @param C syÃ¶tekokoelma
     * @param <E> alkiotyyppi
     * @return useimmin esiintynyt alkiot
     */
    public static <E> E yleisin(Collection<E> C) {

        HashMap<E, Integer> es = new HashMap<E, Integer>();
        E yleisin = null;

        for (E t : C) {
        Integer val = es.get(t);
        es.put(t, val == null ? 1 : val + 1);
    }

    Entry<E, Integer> max = null;

    for (Entry<E, Integer> e : es.entrySet()) {
        if (max == null || e.getValue() > max.getValue())
            max = e;
    }
   /* int yn = 0;
    
    for (E x : C){
    Integer val = es.get(x);
    if(n == null)
    {
    es.put(x,1);
    n=0;
    } else
    es.put(x. new Integer(n+1));
    }
    if((int)n+1 >yn){
        yn =(int)n+1;
        yleisin = x;
    }
*/
    return max.getKey();

    }


    /**
     * Poista listasta useammat kuin k esiintymÃ¤t kutakin alkiota.
     * @param L syÃ¶telista
     * @param k maksimi mÃ¤Ã¤rÃ¤ sÃ¤ilytettÃ¤viÃ¤ alkioita
     * @param <E> alkiotyyppi
     */
    public static <E> void poistaMonet(List<E> L, int k) {
        
        HashMap<E, Integer> es = new HashMap<E, Integer>();
        ListIterator<E> i =L.listIterator();
        while(i.hasNext()){
            E x =i.next();
            
            Integer n = es.get(x);
            if(n == null){
                es.put(x,1);
                n=0;
                } else {
                es.put(x, new Integer(n+1));
                    }
                    if ((int)n+1>n)
                    es.remove(x);
                }
        
    int occurrences0 = Collections.frequency(L, 0);
    int occurrences1 = Collections.frequency(L, 1);
    int occurrences3 = Collections.frequency(L, 3);
    int occurrences4 = Collections.frequency(L, 4);
    int occurrences5 = Collections.frequency(L, 5);
    int occurrences6 = Collections.frequency(L, 6);
    int occurrences7 = Collections.frequency(L, 7);
    int occurrences8 = Collections.frequency(L, 8);
    int occurrences = Collections.frequency(L, k);
    
    if(occurrences<occurrences0)
        for ( int j = 0; j < L.size(); j++) {
        if (Objects.equals(0, L.get(j))) 
            L.remove(j);       
    }
        
            if(occurrences<occurrences1)
        for ( int j = 0; j < L.size(); j++) {
        if (Objects.equals(1, L.get(j))) 
            L.remove(j);       
    }
                if(occurrences<occurrences3)
        for ( int j = 0; j < L.size(); j++) {
        if (Objects.equals(3, L.get(j))) 
            L.remove(j);       
    }
                    if(occurrences<occurrences4)
        for ( int j = 0; j < L.size(); j++) {
        if (Objects.equals(4, L.get(j))) 
            L.remove(j);       
    }
                        if(occurrences<occurrences5)
        for ( int j = 0; j < L.size(); j++) {
        if (Objects.equals(5, L.get(j))) 
            L.remove(j);       
    }
                            if(occurrences<occurrences6)
        for ( int j = 0; j < L.size(); j++) {
        if (Objects.equals(6, L.get(j))) 
            L.remove(j);       
    }
                                if(occurrences<occurrences7)
        for ( int j = 0; j < L.size(); j++) {
        if (Objects.equals(7, L.get(j))) 
            L.remove(j);       
    }
                                if(occurrences<occurrences8)
        for ( int j = 0; j < L.size(); j++) {
        if (Objects.equals(8, L.get(j))) 
            L.remove(j);       
    }
    
      int indexofk = (Integer)L.get(k);
        L.subList(0, indexofk).clear();
    }
}


/*
    for ( int i = 0; i < L.size(); i++){
       occurrences2 = Collections.frequency(L, i);
       if(occurrences<occurrences2){
        for ( int j = 0; j < L.size(); j++) {
        if (Objects.equals(i, L.get(j))) 
            L.remove(j);
        
    }
    }
    }*/