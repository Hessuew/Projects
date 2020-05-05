/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import java.util.NoSuchElementException; 
/** * Abstraktin tietotyypin rengas toteutus. 
 * Ei tarjoa asemaa, vaan next() -operaatio tarjoaa 
 * oman mielensÃ¤ mukaan aina seuraavia alkioita */ 
/**
 *
 * @author s709410
 */
public class teht42 implements Ring, Iterable { 
    private E[] data;
    private int size = 0; 




// alkioiden mÃ¤Ã¤rÃ¤, ei vÃ¤lttÃ¤mÃ¤ttÃ¤ tarvita private int previous = 0; 
// viimeksi palautetun alkion indeksi private int modCount = 0; 
/** * Luo uuden tyhjÃ¤n renkaan */ 
@SuppressWarnings("unchecked") 
public Ring_42_pohja() { 
data = (E[]) new Object[10];
} 



/** * Alkioiden mÃ¤Ã¤rÃ¤ renkaassa. 
 * @return Alkioiden mÃ¤Ã¤rÃ¤n. 
 */ 
public int size() { 

return size;
} 


/** * Onko rengas tyhjÃ¤ 
 * @return true jos rengas on tyhjÃ¤, muuten false. */ 
public boolean isEmpty() { 
return (size == 0); 
} 




/** * Palauttaa tiedon voidaanko next():iÃ¤ kutsua. 
 * @return tosi jos renkaassa on alkioita, muuten epÃ¤tosi **/ 
public boolean hasNext() { 

// TODO return false; }


/** * Palauttaa seuraavan alkion renkaasta. 
 * Alussa palauttaa jonkin alkion. 
 * Toistuvasti kutsuttaessa palauttaa kaikkia alkioita vuorotellen. 
 * @return Yhden renkaan alkion. 
 * @throws NoSuchElementException jollei renkaassa ole alkoita */
}
public E next() { 
if (size == 0) 
    throw new NoSuchElementException("Cannot next() from empty Ring_42");

// TODO return null; } 


}

/** * LisÃ¤Ã¤ renkaaseen alkion. 
 * @param x LisÃ¤ttÃ¤vÃ¤ alkio 
 * @return palauttaa aina tosi (aina mahtuu) */
@SuppressWarnings("unchecked")
public boolean add(E x) { 
    if(size> data.lenght){
        E[] newdata = (E[])new Object[data.lenght*2];
        for(int i = 0; i < size; i++)
            newdata[i] = data[i];
        data =newdata;
    }
    data[size++]= x;
    modCount++;
    return true;
}
}