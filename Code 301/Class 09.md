
## Class 09  *FEB 24 2021:* 

> ## Topics

  1. Functional Programming Concepts [View](https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa)
  
  2. Refactoring Javascript for Readability [View](https://dev.to/healeycodes/refactoring-javascript-for-performance-and-readability-with-examples-1hec)


---

 > ## 1. Functional Programming Concepts
 
 #### What is functional programming? 
 
 Functional programming is a programming paradigm — a style of building the structure and elements of computer programs — that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data
 
 
 ![functional](https://lightrains.com/assets/img/blog/functional-javascript-es6.png)

---

 > ## 2. Refactoring Javascript for Readability

Example: 
      
      
      const URLstore = [];

      function makeShort(URL) {
        const rndName = Math.random().toString(36).substring(2);
        URLstore.push({[rndName]: URL});
        return rndName;
      }

      function getLong(shortURL) {
        for (let i = 0; i < URLstore.length; i++) {
          if (URLstore[i].hasOwnProperty(shortURL) !== false) {
            return URLstore[i][shortURL];
          }
        }
      }
      
      
      
      const URLstore = new Map(); // Change this to a Map

      function makeShort(URL) {
        const rndName = Math.random().toString(36).substring(2);
        // Place the short URL into the Map as the key with the long URL as the value
        URLstore.set(rndName, URL);
        return rndName;
      }

      function getLong(shortURL) {
        // Leave the function early to avoid an unnecessary else statement
        if (URLstore.has(shortURL) === false) {
          throw 'Not in URLstore!';
        }
        return URLstore.get(shortURL); // Get the long URL out of the Map
      }

---

GitHub Live: [View](https://anassawalha95.github.io/reading-notes/Code%20301/Class%2009)

GitHub Repo: [View](https://github.com/anassawalha95/reading-notes/tree/main/Code%20301)
