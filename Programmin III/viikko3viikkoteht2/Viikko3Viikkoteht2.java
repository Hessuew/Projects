<<<<<<< HEAD

package viikko3viikkoteht2;


public class Viikko3Viikkoteht2 {


    public static void main(String[] args) {

        TextBox t = new TextBox("Mikko Makkonen");

        
        Slider s = new Slider(11, 17, 6);
        String[] valinnat = {"Banaani","Päärynä", "Omena"};
        ListBox l = new ListBox(valinnat);
        
        Komponentti[] komponentit = {t, s, l};

        Kayttoliittyma k = new Kayttoliittyma(komponentit);
        

        k.tulostaTxt();
        k.tulostaArvot();

    }
    
}
=======

package viikko3viikkoteht2;


public class Viikko3Viikkoteht2 {


    public static void main(String[] args) {

        TextBox t = new TextBox("Mikko Makkonen");

        
        Slider s = new Slider(11, 17, 6);
        String[] valinnat = {"Banaani","Päärynä", "Omena"};
        ListBox l = new ListBox(valinnat);
        
        Komponentti[] komponentit = {t, s, l};

        Kayttoliittyma k = new Kayttoliittyma(komponentit);
        

        k.tulostaTxt();
        k.tulostaArvot();

    }
    
}
>>>>>>> 1bf856ecefdaa92726ff825197de633742624cf0
