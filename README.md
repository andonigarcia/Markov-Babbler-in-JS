Markov Babbler
==============

What is it?
--------------
- A Markov Chain is a weighted directed graph that maps possible next states from your current state based on their probability of occurance. As such, from each point in the chain, you stochastically (and in our case pseudo-randomly) move to a next possible point based on the probability of the next point occuring from your current point.

- Markov Babbling applies this concept of Markov Chains to word choice. We analyze a piece of text (say Shakepeare's Sonnets or Huckleberry Finn) to make our model. Then from a given word (A capital first word as a starting point), we see the probability of the words that follow after in the text. Using our pseudo-random generator, we then take the path of possible next words, writing a somewhat coherent sentence. Markov Babbling has been seen in many different contexts, and here is my project playing around with it! Hope you enjoy, and if you have any feedback, feel free to contact me!

How to use it?
--------------
- Go to the [website](http://andonigarcia.github.io/Markov-Babbler-in-JS/)
- Click the button **"Ready, Set, Babble!"**

Created by Andoni M. Garcia
--------------
http://andonigarcia.com/
