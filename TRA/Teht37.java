<<<<<<< HEAD
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Oma;

import java.util.Arrays;

/**
 *
 * @author Juhani
 */
public class Teht37 {
     public static void main(String[] args) {

    String[] taulu = { "E", "D", "N", "Z", "R", "H", "B", "K", "S", "G", "P", "F", "J", "A", "C", "X" };
    int i = 0;
    int j = taulu.length-1;
    
    pikalajittelu(taulu, i, j);

     }
     public static <E extends Comparable<? super E>> int partition(E[] A, int i, int j) {
         E jakoalkio = A[i];
         while (i<j) {             
             while((i<j) && (jakoalkio.compareTo(A[j])< 0))
                 j--;
             A[i] = A[j];
             
            while((i<j) && (jakoalkio.compareTo(A[i]) >= 0))
                i++;
                A[j] = A[i];
            
         }
         A[i] = jakoalkio;
         return i;
     }
     public static <E extends Comparable<? super E>> void pikalajittelu(E[] A, int i, int j) {
        if (i<j){
            int jako = partition(A, i, j);
            System.out.println(Arrays.toString(A));
            pikalajittelu(A, i, jako-1);
            pikalajittelu(A, jako+1, j);
        }
     }
}
=======
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Oma;

import java.util.Arrays;

/**
 *
 * @author Juhani
 */
public class Teht37 {
     public static void main(String[] args) {

    String[] taulu = { "E", "D", "N", "Z", "R", "H", "B", "K", "S", "G", "P", "F", "J", "A", "C", "X" };
    int i = 0;
    int j = taulu.length-1;
    
    pikalajittelu(taulu, i, j);

     }
     public static <E extends Comparable<? super E>> int partition(E[] A, int i, int j) {
         E jakoalkio = A[i];
         while (i<j) {             
             while((i<j) && (jakoalkio.compareTo(A[j])< 0))
                 j--;
             A[i] = A[j];
             
            while((i<j) && (jakoalkio.compareTo(A[i]) >= 0))
                i++;
                A[j] = A[i];
            
         }
         A[i] = jakoalkio;
         return i;
     }
     public static <E extends Comparable<? super E>> void pikalajittelu(E[] A, int i, int j) {
        if (i<j){
            int jako = partition(A, i, j);
            System.out.println(Arrays.toString(A));
            pikalajittelu(A, i, jako-1);
            pikalajittelu(A, jako+1, j);
        }
     }
}
>>>>>>> 1bf856ecefdaa92726ff825197de633742624cf0
