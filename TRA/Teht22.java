/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapplication1;

import fi.uef.cs.tra.BTree;
import fi.uef.cs.tra.BTreeNode;
import java.util.Random;

/**
 *
 * @author s709410
 */
public class Teht22 {
    public static void main(String[] args) {

        BTree<Integer> puu = new BTree<Integer>();

        int N = 10;
        if (args.length > 0)
            N = Integer.valueOf(args[0]);

        System.out.println("Puuhun:");
        Random r = new Random(42);
        Integer x = new Integer(0);
        for (int i = 0; i < N; i++) {
            x = r.nextInt(N*2);
            System.out.print(x + " ");
            inorderInsert(puu, x);
        }
        System.out.println();

        System.out.println("SisÃ¤jÃ¤rjestyksessÃ¤:");
        inorderPrint(puu);

        for (int i = 0; i < 17; i++) {
            System.out.println("Onko " + i + " : " +
                               inorderMember(puu, new Integer(i)));
        }

        puu = exampleBTree();

        System.out.println("Sisajarjestyksessa:");
        inorderPrint(puu);

        // testataan 23
        // etsitÃ¤Ã¤n ensimmÃ¤inen solmu
        BTreeNode n = inorderFirst(puu);
        System.out.println("SisÃ¤jÃ¤rjestyksessÃ¤ ensimmÃ¤inen: " + n);

        System.out.println();

        // testataan 24
        System.out.println("Korkeus = " + korkeus(puu));

    } // main()



    public static BTree<Integer> exampleBTree() {

        BTree<Integer> T = new BTree<Integer>();

        // juuri
        T.setRoot(new BTreeNode<Integer>(10));

        BTreeNode<Integer> n = T.getRoot();

        // juuren lapset
        n.setLeftChild(new BTreeNode<Integer>(5));
        n.setRightChild(new BTreeNode<Integer>(15));

        // vasen haara
        BTreeNode<Integer> l = n.getLeftChild();

        l.setLeftChild(new BTreeNode<Integer>(3));
        l.setRightChild(new BTreeNode<Integer>(8));

        l.getLeftChild().setRightChild(new BTreeNode<Integer>(4));

        // oikea haara
        l = n.getRightChild();

        l.setLeftChild(new BTreeNode<Integer>(12));
        l.setRightChild(new BTreeNode<Integer>(18));

        l.getLeftChild().setLeftChild(new BTreeNode<Integer>(11));
        l.getLeftChild().setRightChild(new BTreeNode<Integer>(13));


        System.out.println("                 ");
        System.out.println("       10        ");
        System.out.println("    __/  \\__     ");
        System.out.println("   5        15   ");
        System.out.println("  / \\      /  \\  ");
        System.out.println(" 3   8   12    18");
        System.out.println("  \\      /\\      ");
        System.out.println("   4    11 13    ");
        System.out.println("                 ");

        return T;

    } // exampleBTree()



    /**
     * 22. LisÃ¤ys sisÃ¤jÃ¤rjestettyyn binÃ¤Ã¤ripuuhun.
     * @param T binÃ¤Ã¤ripuu
     * @param x lisÃ¤ttÃ¤vÃ¤ alkio
     * @return tehtiinkÃ¶ lisÃ¤ys vai ei
     */
    public static <E extends Comparable<? super E>>
                boolean inorderInsert(BTree<E> T, E x) {
                    
        BTreeNode<E> n = T.getRoot();
        if (n == null){
           T.setRoot(new BTreeNode<E>(x));
        return true;
        }
        while (true) {            

        if (x.compareTo(n.getElement())== 0)
            //x jo puussa, eli lisätä
            return false;
        
        else if (x.compareTo(n.getElement()) < 0){
            //x edeltää n:n alkiota
        
            if(n.getLeftChild() == null){
                n.setLeftChild(new BTreeNode<E>(x));
         return true;
            }else 
                n = n.getLeftChild();
        } else {
            // x on suurempi kuin n
            if (n.getRightChild()== null) {
                //lisäyskohta löydetty
            
                n.setRightChild(new BTreeNode<E>(x));
                return true;
                
            } else
             n = n.getRightChild();
        }
        }
    } // inorderInsert()

    /**
     * 23. puun sisÃ¤jÃ¤rjestyksessÃ¤ ensimmÃ¤inen solmu
     * @param T puu
     * @return puun T ensimmÃ¤inen solmu, tai null jos puu tyhjÃ¤
     **/

    public static <E> BTreeNode<E> inorderFirst(BTree<E> T) {

        BTreeNode<E> n = T.getRoot();
        if (n == null)
        return null;
       while (n.getLeftChild() != null)             
           n= n.getLeftChild();
        
        return n;
    }
    


    /**
     * 24. Puun korkeus. KÃ¤ynnistysmetodi
     * @param t tarkasteltava binÃ¤Ã¤ripuu.
     * @return puun korkeus
     **/
    public static int korkeus(BTree t) {

        return korkeus(t.getRoot());
    }


    /**
     * Solmun korkeus.
     * @param n tarkasteltava solmu
     * @return solmun korkeus, tai -1 jos n==null
     */
    public static int korkeus(BTreeNode n) {
        if(n == null)
        return -1;
        
        
        return java.lang.Math.max(korkeus(n.getLeftChild()),
                korkeus(n.getRightChild()))+1;
    }




    // -------------------------------
    // esimerkkejÃ¤

    public static <E extends Comparable<? super E>>
        boolean inorderMember(BTree<E> T, E x) {
            BTreeNode<E> n = T.getRoot();

            while (n != null) {
                if (x.compareTo(n.getElement()) == 0)
                    return true;
                else if (x.compareTo(n.getElement()) < 0)
                    n = n.getLeftChild();
                else
                    n = n.getRightChild();
            } // while
            return false;

        } // inorderMember()


    // Tulostus sisÃ¤jÃ¤rjestyksessÃ¤ rekursiivisesti
    public static void inorderPrint(BTree T) {
        inorderPrintBranch(T.getRoot());
        System.out.println();
    } // inorderPrint()


    public static void inorderPrintBranch(BTreeNode n) {
        if (n == null)
            return;

        inorderPrintBranch(n.getLeftChild());
        System.out.print(n.getElement() + " ");
        inorderPrintBranch(n.getRightChild());

    } // inorderPrintBranch()

}
