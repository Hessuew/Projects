
package viikko3viikkoteht2;

/**
 *
 * @author vtkinju
 */
public class TextBox extends Komponentti{
    private String text;

    public TextBox(String text) {
        this.text = text;
    }
    
    public String getText() {
        return text;
    }
    
}
