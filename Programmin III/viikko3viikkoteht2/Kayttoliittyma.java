
package viikko3viikkoteht2;


import java.lang.reflect.Field;


public class Kayttoliittyma {
    private Komponentti[] komponentit;

    public Kayttoliittyma(Komponentti[] komponentit) {
        this.komponentit = komponentit;
    }
    
    public void tulostaTxt(){
        for (int i = 0; i < komponentit.length; i++){
            Komponentti k = komponentit[i];
            
            Class <?> objClass = k.getClass();
            Field[] kentat = objClass.getDeclaredFields();
            
            for (Field f : kentat){
                String nimi = f.getName();
                if (nimi.equals("text")){
                    System.out.println(((TextBox)k).getText());
                }
            }

        }
    }
    public void tulostaArvot(){
        for (int i = 0; i < komponentit.length; i++){
            Komponentti k = komponentit[i];
            if (k instanceof Slider){
                System.out.println("min: " + ((Slider) k).getMin() + "\nmax: " +
                ((Slider) k).getMax() + "\nvalinta: " + ((Slider) k).getVal());
                System.out.println();
            }
        }
    }
}

