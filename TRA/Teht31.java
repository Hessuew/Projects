<<<<<<< HEAD
package Oma;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import fi.uef.cs.tra.TraSet;
import java.util.Random;
import java.util.TreeSet;
import java.util.HashSet;

/**
 *
 * @author Juhani
 */
public class Teht31 {
    public static void main(String[] args) {

		int N = 10;
		if (args.length > 0)
			N = Integer.valueOf(args[0]);


		TraSet<Integer> S1 = new TraSet<Integer>();
		TraSet<Integer> S2 = new TraSet<Integer>();
		TraSet<Integer> S3 = new TraSet<Integer>();

		Random r = new Random(42);
		Integer x, y;
		for (int i = 0; i < N; i++) {
			x = r.nextInt(N*2);
			S1.add(x);
			y = r.nextInt(N*2);
			S2.add(x-y);
			S3.add(x+y);
		}


		System.out.println("S1:      " + S1);
		System.out.println("S2:      " + S2);
		System.out.println("S3:      " + S3);


		System.out.println("KaksikolmestaTRA: " + kaksiKolmesta(S1, S2, S3));

        TreeSet<Integer> TS1 = new TreeSet<Integer>(S1);
        TreeSet<Integer> TS2 = new TreeSet<Integer>(S2);
        TreeSet<Integer> TS3 = new TreeSet<Integer>(S3);

        System.out.println("KaksikolmestaJava: " + kaksiKolmesta(TS1, TS2, TS3));








	} // main()


    /**
      * 31.
      * Kirjoita algoritmi joka hakee joukkojen â€�?kaksi kolmestaâ€�? leikkauksen.
      * Algoritmi saa siis parametrinaan kolme joukkoa ja muodostaa uuden
      * joukon niistÃ¤ alkioista jotka kuuluvat tÃ¤smÃ¤lleen kahteen
      * syÃ¶tejoukoista. Voit kÃ¤yttÃ¤Ã¤ TRA-kirjaston joukkoa tai Java API:n
      * joukkoa.  Ã„lÃ¤ muuta syÃ¶tejoukkoja. Aikavaativuus?
      **/

    // 31. kaksi kolmesta Tra-kirjaston joukolla
	public static <E> TraSet<E> kaksiKolmesta(TraSet<E> A, TraSet<E> B, TraSet<E> C) {
            HashSet a = new HashSet(A);
            HashSet a2 = new HashSet(A);
            HashSet b = new HashSet(B);
            HashSet c = new HashSet(C);
            HashSet result = new HashSet(A);
        // TODO
            
            A.retainAll(b);
            B.retainAll(c);
            a2.retainAll(c);

            result.addAll(A);
            result.addAll(B);

            TraSet<E> Sresult = new TraSet<>(result);
        return Sresult; // poista


	} // kaksiKolmesta()
		
    // 31. kaksi kolmesta JavaAPI:n joukolla
	public static <E> TreeSet<E> kaksiKolmesta(TreeSet<E> A, TreeSet<E> B, TreeSet<E> C) {
            HashSet a = new HashSet(A);
            HashSet a2 = new HashSet(A);
            HashSet b = new HashSet(B);
            HashSet c = new HashSet(C);
            HashSet result = new HashSet(A);
            
            a.retainAll(b);
            b.retainAll(c);
            a2.retainAll(c);
            
            result.addAll(a);
            result.addAll(a2);
            result.addAll(b);
            
        // TODO
            TreeSet<E> Tsresult = new TreeSet<>(result);
        return Tsresult; // poista

	} // kaksiKolmesta()
}
=======
package Oma;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import fi.uef.cs.tra.TraSet;
import java.util.Random;
import java.util.TreeSet;
import java.util.HashSet;

/**
 *
 * @author Juhani
 */
public class Teht31 {
    public static void main(String[] args) {

		int N = 10;
		if (args.length > 0)
			N = Integer.valueOf(args[0]);


		TraSet<Integer> S1 = new TraSet<Integer>();
		TraSet<Integer> S2 = new TraSet<Integer>();
		TraSet<Integer> S3 = new TraSet<Integer>();

		Random r = new Random(42);
		Integer x, y;
		for (int i = 0; i < N; i++) {
			x = r.nextInt(N*2);
			S1.add(x);
			y = r.nextInt(N*2);
			S2.add(x-y);
			S3.add(x+y);
		}


		System.out.println("S1:      " + S1);
		System.out.println("S2:      " + S2);
		System.out.println("S3:      " + S3);


		System.out.println("KaksikolmestaTRA: " + kaksiKolmesta(S1, S2, S3));

        TreeSet<Integer> TS1 = new TreeSet<Integer>(S1);
        TreeSet<Integer> TS2 = new TreeSet<Integer>(S2);
        TreeSet<Integer> TS3 = new TreeSet<Integer>(S3);

        System.out.println("KaksikolmestaJava: " + kaksiKolmesta(TS1, TS2, TS3));








	} // main()


    /**
      * 31.
      * Kirjoita algoritmi joka hakee joukkojen â€�?kaksi kolmestaâ€�? leikkauksen.
      * Algoritmi saa siis parametrinaan kolme joukkoa ja muodostaa uuden
      * joukon niistÃ¤ alkioista jotka kuuluvat tÃ¤smÃ¤lleen kahteen
      * syÃ¶tejoukoista. Voit kÃ¤yttÃ¤Ã¤ TRA-kirjaston joukkoa tai Java API:n
      * joukkoa.  Ã„lÃ¤ muuta syÃ¶tejoukkoja. Aikavaativuus?
      **/

    // 31. kaksi kolmesta Tra-kirjaston joukolla
	public static <E> TraSet<E> kaksiKolmesta(TraSet<E> A, TraSet<E> B, TraSet<E> C) {
            HashSet a = new HashSet(A);
            HashSet a2 = new HashSet(A);
            HashSet b = new HashSet(B);
            HashSet c = new HashSet(C);
            HashSet result = new HashSet(A);
        // TODO
            
            A.retainAll(b);
            B.retainAll(c);
            a2.retainAll(c);

            result.addAll(A);
            result.addAll(B);

            TraSet<E> Sresult = new TraSet<>(result);
        return Sresult; // poista


	} // kaksiKolmesta()
		
    // 31. kaksi kolmesta JavaAPI:n joukolla
	public static <E> TreeSet<E> kaksiKolmesta(TreeSet<E> A, TreeSet<E> B, TreeSet<E> C) {
            HashSet a = new HashSet(A);
            HashSet a2 = new HashSet(A);
            HashSet b = new HashSet(B);
            HashSet c = new HashSet(C);
            HashSet result = new HashSet(A);
            
            a.retainAll(b);
            b.retainAll(c);
            a2.retainAll(c);
            
            result.addAll(a);
            result.addAll(a2);
            result.addAll(b);
            
        // TODO
            TreeSet<E> Tsresult = new TreeSet<>(result);
        return Tsresult; // poista

	} // kaksiKolmesta()
}
>>>>>>> 1bf856ecefdaa92726ff825197de633742624cf0
