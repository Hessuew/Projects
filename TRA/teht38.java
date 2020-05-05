/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Oma;


import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.PriorityQueue;
import java.util.Random;
/**
 *
 * @author Juhani
 */
public class teht38 {
    public static void main(String[] args) {

        // taulukoiden koko
        int N = 11;
        if (args.length > 0)
            N = Integer.valueOf(args[0]);

        // lopun sekaiset
        int K = 3;
        if (args.length > 1)
            K = Integer.valueOf(args[1]);

        // satunnaislukusiemen
        int siemen = 4;
        if (args.length > 2)
            siemen = Integer.valueOf(args[2]);


        // tÃ¤ytetÃ¤Ã¤n lajiteltu osa alkioilla
        ArrayList<Integer> L = new ArrayList<Integer>();
        Random r = new Random(siemen);
        for (int i = 0; i < N; i++) {
            L.add(r.nextInt(N*3));
        }
        Collections.sort(L);

        // lisÃ¤tÃ¤Ã¤n loppuun sekaisia alkioita
        for (int i = 0; i < K; i++) {
            L.add(r.nextInt(N*2));
        }

        // tulostetaan listat jos alkioita ei ole paljoa
        System.out.println("SyÃ¶tteessÃ¤ L alkioita: " + L.size());
        if (N <= 20) System.out.println("L:" + L);

        kJarjesta(L, K);

        if (N <= 20) System.out.println("L:" + L);

        // lisÃ¤tÃ¤Ã¤n pari pientÃ¤
        L.add(-100);
        L.add(-1000);
        kJarjesta(L, 2);
        if (N <= 20) System.out.println("L:" + L);

        // lisÃ¤tÃ¤Ã¤n pari suurta
        L.add(100);
        L.add(1000);
        kJarjesta(L, 2);
        if (N <= 20) System.out.println("L:" + L);

        // lisÃ¤tÃ¤Ã¤n samat pari suurta uudestaan
        L.add(100);
        L.add(1000);
        kJarjesta(L, 2);
        if (N <= 20) System.out.println("L:" + L);

        // ei lisÃ¤tÃ¤ mitÃ¤Ã¤n
        kJarjesta(L, 0);
        if (N <= 20) System.out.println("L:" + L);


    } // main()

    /**
     * JÃ¤rjestÃ¤Ã¤ melkein jÃ¤rjestyksessÃ¤ olevan taulukon.
     * EnintÃ¤Ã¤n k viimeistÃ¤ alkiota saa olla sekaisin, n-k ensimmÃ¤istÃ¤ alkiota oltava
     * valmiiksi jÃ¤rjestyksessÃ¤.
     * @param A lajiteltava taulukko
     * @param k lopun sekaisten mÃ¤Ã¤rÃ¤
     * @param <E> alkiotyyppi
     */
    public static <E extends Comparable<? super E>> void kJarjesta(ArrayList<E> A, int k) {

        if (k < 1)
            return;
        int n = A.size();
        if (k > n)
            k = n;
        
        PriorityQueue<E> PQ = new PriorityQueue<E>(k, Collections.reverseOrder());
        for (int i = 0; i < k; i++) {
            PQ.offer(A.get(n-i-1));
        }
        int kirj = n-1;
        int luku = n-k-1;
        
        while (!PQ.isEmpty()) {            
            if(luku < 0)
                A.set(kirj--, PQ.poll());
            else{
                int cmp = A.get(luku).compareTo(PQ.peek());
                if(cmp <= 0)
                    A.set(kirj--,PQ.poll());
                else
                    A.set(kirj--,A.get(luku--));
            }
        }
    }
}
