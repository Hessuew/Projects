package Oma;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Juhani
 */
import fi.uef.cs.tra.BTree;
import fi.uef.cs.tra.BTreeNode;

import java.util.ArrayDeque;
import java.util.Queue;
import java.util.Random;

public class Teht28 {
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

        // testataan lÃ¤pikÃ¤yntiÃ¤
        System.out.println("LÃ¤pikÃ¤ynti sisajarjestyksessa:");
        // etsitÃ¤Ã¤n ensimmÃ¤inen solmu
        BTreeNode n = inorderFirst(puu);
        while (n != null) {
            System.out.print(n.getElement() + " ");
            n = inorderNext(n);
        }
        System.out.println();

        System.out.println("Matalin: " + matalin(puu));


    } // main()

    /**
     * 22.
     * Kirjoita operaatio inorderFirst() joka saa parametrinaan binÃ¤Ã¤ripuun ja
     * joka palauttaa puun sisÃ¤jÃ¤rjestyksessÃ¤ ensimmÃ¤isen solmun tai null
     * jollei ensimmÃ¤istÃ¤ solmua ole.
     * @param T puu
     * @return puun T ensimmÃ¤inen solmu, tai null jos puu tyhjÃ¤
     **/

    public static BTreeNode inorderFirst(BTree T) {

        BTreeNode n = T.getRoot();
        if (n == null)
            return null;
        while (n.getLeftChild() != null)
            n = n.getLeftChild();
        return n;

    }


    /**
     * 28. Kirjoita operaatio inorderNext() joka saa parametrinaan
     * binÃ¤Ã¤ripuun solmun ja joka palaut- taa ko. solmun seuraajasolmun
     * sisÃ¤jÃ¤rjestyksessÃ¤. Algoritmi ei tutki solmujen sisÃ¤ltÃ¶Ã¤, vain puun
     * rakennetta. Solmun seuraaja on oikean lapsen vasemmanpuoleisin
     * jÃ¤lkelÃ¤inen, tai, jollei oikeaa lasta ole, niin se esivanhempi jonka
     * vasemmassa alipuussa alkuperÃ¤inen solmu oli. Jollei edeltÃ¤jÃ¤Ã¤ ole,
     * inorderNext() palauttaa null. Ota pohja www-sivulta. Algoritmin
     * toiminta kÃ¤y- tiin lÃ¤pi luennolla. Aikavaativuus? TehtÃ¤vÃ¤n 22
     * algoritmia ja tÃ¤tÃ¤ toistuvasti kutsuen voidaan kÃ¤ydÃ¤ binÃ¤Ã¤ripuun
     * alkiot lÃ¤pi sisÃ¤jÃ¤rjestyksessÃ¤. MikÃ¤ on koko lÃ¤pikÃ¤ynnin
     * aikavaativuus?
     * @param n puusolmu
     * @return n:n seuraaja tai null jos n oli viimeinen
     **/

    public static BTreeNode inorderNext(BTreeNode n) {

        BTreeNode l = new BTreeNode(n);
        if ( n == null)
        return null;
        
        if(n.getRightChild()!= null) {
            n = n.getRightChild();  
            if(n.getLeftChild() != null){
            while (n.getLeftChild() != null)
                n = n.getLeftChild();
                n.getLeftChild();
                return n;
            }else{
                return n;
            }

    }else {
         while(n.getParent() != null && n.)  { 
            n = n.getParent();
         }else{
         while(n.getRightChild() == ){
        
             
             
             }
        }
    }
        return n;
    } // inorderNext()




    /**
     * 29. Kirjoita algoritmi joka etsii binÃ¤Ã¤ripuun matalimman (vÃ¤hiten syvÃ¤n)
     * lehtisolmun. Vihje: tasoittainen lÃ¤pikÃ¤ynti. Aikavaativuus?
     * @param T binÃ¤Ã¤ripuu
     * @return matalin lehtisolmu tai null jos puu on tyhjÃ¤
     **/

    public static BTreeNode matalin(BTree T) {

        
        //muuta jonoksi ja katso sitten.
        BTreeNode n = T.getRoot();
        BTreeNode l = new BTreeNode(n);
        int mindist1 = 0;
        int mindist2 = 0;
        if(n.getElement() == null){
            return null;
        } else if(n.getLeftChild() != null){
            
        while(n.getLeftChild() != null){
            n = n.getLeftChild();
            n.getLeftChild();
            mindist1++;
        }
        } else{
            while(l.getRightChild() != null){
            l = l.getRightChild();
            l.getRightChild();
            mindist2++;
        }
         if (mindist1 > mindist2){
             return n;
        }else
             return l;
         
    } // matalin()




    /**
     * 23) Kirjoita algoritmi, joka lisÃ¤Ã¤ sisÃ¤jÃ¤rjestyksessÃ¤ olevaan
     * binÃ¤Ã¤ripuuhun uuden solmun siten, ettÃ¤ puu sÃ¤ilyy sisÃ¤jÃ¤rjestyksessÃ¤. 
     * Jos samannimiÃ¶inen solmu oli jo puussa, niin solmua ei lisÃ¤tÃ¤ puuhun. 
     * Parametrina puu ja alkio, algoritmi luo uuden solmun jos lisÃ¤ys tehdÃ¤Ã¤n. 
     * Algoritmin toiminta kÃ¤ytiin lÃ¤pi luennolla. Aikavaativuus?
     * @param T binÃ¤Ã¤ripuu
     * @param x lisÃ¤ttÃ¤vÃ¤ alkio
     * @return tehtiinkÃ¶ lisÃ¤ys vai ei
     */
    public static <E extends Comparable<? super E>> 
        boolean inorderInsert(BTree<E> T, E x) {
            BTreeNode<E> n = T.getRoot();
            if (n == null) {
                T.setRoot(new BTreeNode<E>(x));
                return true;
            }

            while (true) {

                if (x.compareTo(n.getElement()) == 0)
                    // x jo puussa, eli lisï¿½tï¿½
                    return false;

                else if (x.compareTo(n.getElement()) < 0) {
                    // x edeltï¿½ï¿½ n:n alkiota
                    if (n.getLeftChild() == null) {
                        // lisï¿½yskohta lï¿½ydetty
                        n.setLeftChild(new BTreeNode<E>(x));
                        return true;
                    } else
                        n = n.getLeftChild();
                } else {
                    // x suurempi kuin n
                    if (n.getRightChild() == null) {
                        // lisï¿½yskohta lï¿½ydetty
                        n.setRightChild(new BTreeNode<E>(x));
                        return true;
                    } else
                        n = n.getRightChild();
                }
            } // while

        } // inorderInsert()



    // Tulostus sisï¿½jï¿½rjestyksessï¿½ rekursiivisesti
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
