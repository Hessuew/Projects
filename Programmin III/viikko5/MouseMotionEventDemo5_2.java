/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Kotitehtävät;

/**
 *
 * @author s709410
 */
import java.awt.Color;
import java.awt.Dimension;
import java.awt.event.MouseMotionListener;
import java.awt.event.MouseListener;
import java.awt.event.MouseEvent;
import java.awt.GridLayout;

import javax.swing.*;

public class MouseMotionEventDemo5_2 extends JPanel
        implements MouseMotionListener, MouseListener {
    
    BlankArea5_2 blankArea;
    JTextArea textArea;
    static final String NEWLINE = System.getProperty("line.separator");
    
    public static void main(String[] args) {

        javax.swing.SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                createAndShowGUI();
            }
        });
    }
    
    private static void createAndShowGUI() {

        JFrame frame = new JFrame("MouseMotionEventDemo");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        

        JComponent newContentPane = new MouseMotionEventDemo5_2();
        newContentPane.setOpaque(true); 
        frame.setContentPane(newContentPane);
        
        frame.pack();
        frame.setVisible(true);
    }
    
    public MouseMotionEventDemo5_2() {
        super(new GridLayout(0,1));
        blankArea = new BlankArea5_2(Color.YELLOW);
        add(blankArea);
        
        textArea = new JTextArea();
        textArea.setEditable(false);
        JScrollPane scrollPane = new JScrollPane(textArea,
                JScrollPane.VERTICAL_SCROLLBAR_ALWAYS,
                JScrollPane.HORIZONTAL_SCROLLBAR_AS_NEEDED);
        scrollPane.setPreferredSize(new Dimension(200, 75));
        
        add(scrollPane);
        
        blankArea.addMouseMotionListener(this);
        addMouseMotionListener(this);
        blankArea.addMouseListener(this);
        addMouseListener(this);
        
        setPreferredSize(new Dimension(450, 450));
        setBorder(BorderFactory.createEmptyBorder(20,20,20,20));
    }
    
    void eventOutput(String eventDescription, MouseEvent e) {
        textArea.append(eventDescription
                + " (" + e.getX() + "," + e.getY() + ")"
                + " detected on "
                + e.getComponent().getClass().getName()
                + NEWLINE);
        textArea.setCaretPosition(textArea.getDocument().getLength());
    }
    
    public void mouseMoved(MouseEvent e) {
        eventOutput("Mouse moved", e);
    }
    
    public void mouseDragged(MouseEvent e) {
        eventOutput("Mouse dragged", e);
    }
    
    public void mousePressed(MouseEvent e) {

    }
    
    public void mouseReleased(MouseEvent e) {

    }
    
    public void mouseEntered(MouseEvent e) {

    }
    
    public void mouseExited(MouseEvent e) {

    }
    
    public void mouseClicked(MouseEvent e) {
        eventOutput("Mouse clicked (# of clicks: "
                + e.getClickCount() + ")", e);
    } 
    
    
}
