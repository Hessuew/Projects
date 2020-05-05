package Oma;

import java.util.ArrayDeque;
import java.util.Queue;
import java.util.Stack;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Juhani
 */
public class Teht19 {
    public static void main(String[] args) {

        // pinon koko
		int N = 10;
        if (args.length > 0)
            N = Integer.valueOf(args[0]);

        // kÃ¤Ã¤nnettÃ¤vien mÃ¤Ã¤rÃ¤
		int k = 3;
        if (args.length > 1)
            k = Integer.valueOf(args[1]);


		Stack<String> S = new Stack<String>();
		for (int i = 0; i < N; i++)
			S.push("a" + i);

		if (N <= 20)
			System.out.println(S);

		reverse_k(S, k);
		if (N <= 20)
			System.out.println(S);

	} // main()


	/**
     * Pinon k pÃ¤Ã¤llimmÃ¤isen alkion kÃ¤Ã¤ntÃ¶.
	 * @param S KÃ¤siteltÃ¤vÃ¤ pino.
	 * @param k kÃ¤Ã¤nnettÃ¤vien alkioiden mÃ¤Ã¤rÃ¤.
	 * @param <E> alkiotyyppi
	 */
	public static <E> void reverse_k(Stack<E> S, int k) {
            Queue<E> Q = new ArrayDeque<E>();
            
            for (int i = 0; i < k; i++) {
                Q.offer(S.pop());
            }
            while (!Q.isEmpty()) {                
                S.push(Q.poll());
            }
        }
    };

