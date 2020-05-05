<<<<<<< HEAD
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Oma;

/**
 *
 * @author Juhani
 */
import java.util.ArrayList;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.NoSuchElementException;


/**
  * Abstraktin tietotyypin rengas toteutus.
  * Ei tarjoa asemaa, vaan next() -operaatio tarjoaa
  * oman mielensÃ¤ mukaan aina seuraavia alkioita
  */
public class Teht39_41<E> implements Ring<E> {

    // luokan jÃ¤senet, voi olla, ettet tarvise nÃ¤itÃ¤ kaikkia, muokkaa vapaasti

    private ArrayList<E> data;  // talletusalue
    private int size = 0;   // alkioiden mÃ¤Ã¤rÃ¤
    private int edell = -1;   // viimeksi palautetun alkion indeksi
    private int seur = 0;   // seuraavaksi palautettavan indeksi
    private int modCount = 0;   // iteraattorin toteutukseen


    /**
      * Luo uuden tyhjÃ¤n renkaan
      */
    public Teht39_41() {
        data = new ArrayList<E>();
    }

    /**
      * Alkioiden mÃ¤Ã¤rÃ¤ renkaassa.
      * @return Alkioiden mÃ¤Ã¤rÃ¤n.
      */
    public int size() {
        
        return size;
    }

    /**
      * Onko rengas tyhjÃ¤
      * @return true jos rengas on tyhjÃ¤, muuten false.
      */
    public boolean isEmpty() {
        return (size == 0);
    }

    /**
      * Palauttaa tiedon voidaanko next():iÃ¤ kutsua.
      * @return tosi jos renkaassa on alkioita, muuten epÃ¤tosi
      **/
    public boolean hasNext() {
        
         return seur < size && data.get(seur) != null;
         //return size> 0;
    }


    /**
      * Palauttaa seuraavan alkion renkaasta.
      * Alussa palauttaa jonkin alkion.
      * Toistuvasti kutsuttaessa palauttaa kaikkia alkioita vuorotellen.
      * @return Yhden renkaan alkion.
      * @throws NoSuchElementException jollei renkaassa ole alkoita
      */
    public E next() {
        if (size == 0)
            throw new NoSuchElementException("Cannot next() from empty Ring_39_41");
        return data.get(seur++);
        /*edel = seur;
        seur++;
        if (seur >=size)
        seur=0;
        return data.get(edell);
        
        */
    }

    /**
      * LisÃ¤Ã¤ renkaaseen alkion.
      * @param x LisÃ¤ttÃ¤vÃ¤ alkio
      * @return palauttaa aina tosi (aina mahtuu)
      */
    public boolean add(E x) {
        data.add(x);
        size++;
        modCount++;
        return true;
    }

    /**
      * Poistaa ja palauttaa renkaasta sen alkion joka edellisellÃ¤ kerralla on next():llÃ¤ palautettu
      * Jollei next()iÃ¤ ole kutsuttu, poistaa jonkin alkion.
      * TÃ¤mÃ¤ on valinnainen, jollet tee, niin annan olla kommentoituna.
      * @return Poistettu alkio.
      * @throws NoSuchElementException jollei renkaassa ole alkoita
      */
    
    public E remove() {
        if (size == 0)
            throw new NoSuchElementException("Cannot remove from empty Ring_39_41");
        if (edell < 0)
            throw new IllegalStateException("remove kutsuttu ilman next()Ã¤");
        // TODO
        return;
    
    }
    


    // ota kommenttimerkit pois kun lÃ¤hden tekemÃ¤Ã¤n tehtÃ¤vÃ¤Ã¤ 40-41
    
    @Override
    public Iterator<E> iterator() {
        return new RengasIter();
    }
    

    private class RengasIter implements Iterator<E> {
        int prev = -1;
        int next = 0;
        int prevModCount = modCount;
        /**
         * Returns {@code true} if the iteration has more elements.
         * (In other words, returns {@code true} if {@link #next} would
         * return an element rather than throwing an exception.)
         *
         * @return {@code true} if the iteration has more elements
         */
        @Override
        public boolean hasNext() {
            check();
            return size > 0;
        }

        /**
         * Returns the next element in the iteration.
         *
         * @return the next element in the iteration
         * @throws NoSuchElementException if the iteration has no more elements
         */
        @Override
        public E next() {
            check();
            if (size<1)
                throw new NoSuchElementException("Cannot remove from empty Ring_39_41");
        }

        /**
         * Removes from the underlying collection the last element returned
         * by this iterator (optional operation).  This method can be called
         * only once per call to {@link #next}.  The behavior of an iterator
         * is unspecified if the underlying collection is modified while the
         * iteration is in progress in any way other than by calling this
         * method.
         *
         * @throws IllegalStateException         if the {@code next} method has not
         *                                       yet been called, or the {@code remove} method has already
         *                                       been called after the last call to the {@code next}
         *                                       method
         */
        @Override
        public void remove() {
            check();
            if (prev>0)
                throw new IllegalStateException("remove kutsuttu ilman next()i�");
            data.remove(prev);
            prev = -1;
            if(next>0)
                next--;
            size--;
            prevModCount = ++modCount;
            
        }
        
        
        private void check() {
            if (prevModCount != modCount)
                throw new ConcurrentModificationException("Rengasta muutettu kesken iteroinnin");
        }

    }
} // class






=======
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Oma;

/**
 *
 * @author Juhani
 */
import java.util.ArrayList;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.NoSuchElementException;


/**
  * Abstraktin tietotyypin rengas toteutus.
  * Ei tarjoa asemaa, vaan next() -operaatio tarjoaa
  * oman mielensÃ¤ mukaan aina seuraavia alkioita
  */
public class Teht39_41<E> implements Ring<E> {

    // luokan jÃ¤senet, voi olla, ettet tarvise nÃ¤itÃ¤ kaikkia, muokkaa vapaasti

    private ArrayList<E> data;  // talletusalue
    private int size = 0;   // alkioiden mÃ¤Ã¤rÃ¤
    private int edell = -1;   // viimeksi palautetun alkion indeksi
    private int seur = 0;   // seuraavaksi palautettavan indeksi
    private int modCount = 0;   // iteraattorin toteutukseen


    /**
      * Luo uuden tyhjÃ¤n renkaan
      */
    public Teht39_41() {
        data = new ArrayList<E>();
    }

    /**
      * Alkioiden mÃ¤Ã¤rÃ¤ renkaassa.
      * @return Alkioiden mÃ¤Ã¤rÃ¤n.
      */
    public int size() {
        
        return size;
    }

    /**
      * Onko rengas tyhjÃ¤
      * @return true jos rengas on tyhjÃ¤, muuten false.
      */
    public boolean isEmpty() {
        return (size == 0);
    }

    /**
      * Palauttaa tiedon voidaanko next():iÃ¤ kutsua.
      * @return tosi jos renkaassa on alkioita, muuten epÃ¤tosi
      **/
    public boolean hasNext() {
        
         return seur < size && data.get(seur) != null;
         //return size> 0;
    }


    /**
      * Palauttaa seuraavan alkion renkaasta.
      * Alussa palauttaa jonkin alkion.
      * Toistuvasti kutsuttaessa palauttaa kaikkia alkioita vuorotellen.
      * @return Yhden renkaan alkion.
      * @throws NoSuchElementException jollei renkaassa ole alkoita
      */
    public E next() {
        if (size == 0)
            throw new NoSuchElementException("Cannot next() from empty Ring_39_41");
        return data.get(seur++);
        /*edel = seur;
        seur++;
        if (seur >=size)
        seur=0;
        return data.get(edell);
        
        */
    }

    /**
      * LisÃ¤Ã¤ renkaaseen alkion.
      * @param x LisÃ¤ttÃ¤vÃ¤ alkio
      * @return palauttaa aina tosi (aina mahtuu)
      */
    public boolean add(E x) {
        data.add(x);
        size++;
        modCount++;
        return true;
    }

    /**
      * Poistaa ja palauttaa renkaasta sen alkion joka edellisellÃ¤ kerralla on next():llÃ¤ palautettu
      * Jollei next()iÃ¤ ole kutsuttu, poistaa jonkin alkion.
      * TÃ¤mÃ¤ on valinnainen, jollet tee, niin annan olla kommentoituna.
      * @return Poistettu alkio.
      * @throws NoSuchElementException jollei renkaassa ole alkoita
      */
    
    public E remove() {
        if (size == 0)
            throw new NoSuchElementException("Cannot remove from empty Ring_39_41");
        if (edell < 0)
            throw new IllegalStateException("remove kutsuttu ilman next()Ã¤");
        // TODO
        return;
    
    }
    


    // ota kommenttimerkit pois kun lÃ¤hden tekemÃ¤Ã¤n tehtÃ¤vÃ¤Ã¤ 40-41
    
    @Override
    public Iterator<E> iterator() {
        return new RengasIter();
    }
    

    private class RengasIter implements Iterator<E> {
        int prev = -1;
        int next = 0;
        int prevModCount = modCount;
        /**
         * Returns {@code true} if the iteration has more elements.
         * (In other words, returns {@code true} if {@link #next} would
         * return an element rather than throwing an exception.)
         *
         * @return {@code true} if the iteration has more elements
         */
        @Override
        public boolean hasNext() {
            check();
            return size > 0;
        }

        /**
         * Returns the next element in the iteration.
         *
         * @return the next element in the iteration
         * @throws NoSuchElementException if the iteration has no more elements
         */
        @Override
        public E next() {
            check();
            if (size<1)
                throw new NoSuchElementException("Cannot remove from empty Ring_39_41");
        }

        /**
         * Removes from the underlying collection the last element returned
         * by this iterator (optional operation).  This method can be called
         * only once per call to {@link #next}.  The behavior of an iterator
         * is unspecified if the underlying collection is modified while the
         * iteration is in progress in any way other than by calling this
         * method.
         *
         * @throws IllegalStateException         if the {@code next} method has not
         *                                       yet been called, or the {@code remove} method has already
         *                                       been called after the last call to the {@code next}
         *                                       method
         */
        @Override
        public void remove() {
            check();
            if (prev>0)
                throw new IllegalStateException("remove kutsuttu ilman next()i�");
            data.remove(prev);
            prev = -1;
            if(next>0)
                next--;
            size--;
            prevModCount = ++modCount;
            
        }
        
        
        private void check() {
            if (prevModCount != modCount)
                throw new ConcurrentModificationException("Rengasta muutettu kesken iteroinnin");
        }

    }
} // class






>>>>>>> 1bf856ecefdaa92726ff825197de633742624cf0
