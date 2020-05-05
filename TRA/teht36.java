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
public class teht36 {
   public static void main(String[] args) {

        // taulukoiden koko
        int N = 11;
        if (args.length > 0)
            N = Integer.valueOf(args[0]);

        // satunnaislukusiemen
        int siemen = 4;
        if (args.length > 1)
            siemen = Integer.valueOf(args[1]);


        // tÃ¤ytetÃ¤Ã¤n alkioilla
        ArrayList<Integer> L = new ArrayList<Integer>();
        Random r = new Random(siemen);
        for (int i = 0; i < N; i++) {
            L.add(r.nextInt(N*3));
        }

        // tulostetaan listat jos alkioita ei ole paljoa
        System.out.println("SyÃ¶tteessÃ¤ L alkioita: " + L.size());
        if (N <= 20) System.out.println("L:" + L);

        // testataan muutamalla eri arvolla
        for (int i = 1 ; i <= 10; i+=2)
            System.out.println("" + i + ":nneksi pienin on: " + kPienin(L, i));

    } // main()


    /**
     * k:nneksi pienin alkio.
     * @param A syÃ¶tekokoelma
     * @param k monenneksi pienintÃ¤ haetaan
     * @param <E> alkiotyyppi
     * @return k:nneksi pienin alkio, tai null jollei ole vÃ¤hintÃ¤Ã¤n k alkiota.
     */
    public static <E extends Comparable<? super E>> E kPienin(Collection<E> A, int k) {

        if (k > A.size())
            return null;

        Comparator<E> rev = Collections.reverseOrder();
        PriorityQueue<E> PQ = new PriorityQueue<E>(k + 1, rev);
        
        int i = 0;
        for(E x : A){
            PQ.offer(x);
            i++;
            if(i>k)
                PQ.poll();
        }
        return PQ.poll();
        
       
    }


} // class


// Comparator -luokka joka palauttaa luonnollisen jÃ¤rjestyksen (compareTo) takaperin
class ReverseComparator<T extends Comparable<? super T>> implements Comparator<T> {

    public int compare(T a1, T a2) {
        return - a1.compareTo(a2);
    }  
}
