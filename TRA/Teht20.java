<<<<<<< HEAD
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Oma;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Scanner;

/**
 *
 * @author Juhani
 */
public class Teht20 {
     public static void main(String[] args) {

        String mjono = null;

        if (args.length > 0)
            mjono = args[0];

        if (mjono == null) {
            System.out.print("Anna merkkijono : ");
            Scanner sc = new Scanner(System.in);
            mjono = sc.nextLine();
        }

        System.out.print("Merkkijono '" + mjono + "' ");
        if (onkoPalindromi(mjono))
            System.out.println("on palindromi");
        else
            System.out.println("ei ole palindromi");

    } // main()



    /**
     * Merkkijonosta merkkipakka.
     * @param S syÃ¶temerkkijono
     * @return merkit pakassa
     */
    public static Deque<Character> merkkijonostaPakka(String S) {
        Deque<Character> D = new ArrayDeque<>();
       
        for (int i = 0; i < S.length(); i++)
            D.addLast(S.charAt(i));

        return D;

    }


    /**
     * Onko merkkijono palindromi vai ei?
     * @param S syÃ¶temerkkijono
     * @return totuusarvo
     */
    public static boolean onkoPalindromi(String S) {
        Deque<Character> D = merkkijonostaPakka(S);

        while(D.size()>1){  
            if (D.pollFirst().equals(D.pollLast())) {
                return false;
            } 
        }
        return true;
    }
}
=======
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Oma;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Scanner;

/**
 *
 * @author Juhani
 */
public class Teht20 {
     public static void main(String[] args) {

        String mjono = null;

        if (args.length > 0)
            mjono = args[0];

        if (mjono == null) {
            System.out.print("Anna merkkijono : ");
            Scanner sc = new Scanner(System.in);
            mjono = sc.nextLine();
        }

        System.out.print("Merkkijono '" + mjono + "' ");
        if (onkoPalindromi(mjono))
            System.out.println("on palindromi");
        else
            System.out.println("ei ole palindromi");

    } // main()



    /**
     * Merkkijonosta merkkipakka.
     * @param S syÃ¶temerkkijono
     * @return merkit pakassa
     */
    public static Deque<Character> merkkijonostaPakka(String S) {
        Deque<Character> D = new ArrayDeque<>();
       
        for (int i = 0; i < S.length(); i++)
            D.addLast(S.charAt(i));

        return D;

    }


    /**
     * Onko merkkijono palindromi vai ei?
     * @param S syÃ¶temerkkijono
     * @return totuusarvo
     */
    public static boolean onkoPalindromi(String S) {
        Deque<Character> D = merkkijonostaPakka(S);

        while(D.size()>1){  
            if (D.pollFirst().equals(D.pollLast())) {
                return false;
            } 
        }
        return true;
    }
}
>>>>>>> 1bf856ecefdaa92726ff825197de633742624cf0
