Markov Babbler
==============

What is it?
--------------
- A Markov Chain is a weighted directed graph that maps possible next states from your current statebased on their probability. As such, from each point in the chain, you stochastically (and in our case pseud-randomly) move to a next possible point based on the probability of the next point occuring from your current point.

- Markov Babbling applies this concept of Markov Chains to word choice. We analyze a piece of text (say Shakepeare's Sonnets or Huckleberry Finn) to make our model. Then from a given word (A capital first word as a starting point), we see the probability of the words that follow after in the text. Using our pseudo-random generator, we then take the path of possible next words, writing a somewhat coherent sentence. The eventual application of this is to be able to create rhyming raps based onmore sophisticated models or reproduce coherent articles based on a subject. Markov Babbling hasbeen seen in many different contexts, and here is my project playing around with them! Hope you enjoy, and if you have any feedback, feel free to contact me!

How to use it?
--------------
- Go to the website: http://andonigarcia.github.io/Markov-Babbler-in-JS/
- Click the button **"Ready, Set, Babble!"**

Created by Andoni M. Garcia
--------------
http://andonigarcia.com/
