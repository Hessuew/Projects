
package viikko3viikkoteht2;


public class ListBox extends Komponentti{
    private String[] texts;

    public ListBox(String[] texts) {
        this.texts = texts;
    }

    public String[] getTexts() {
        return texts;
    }
    
}

