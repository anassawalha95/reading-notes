## Class 10  *FEB 25 2021:* 

> ## Topics

  1. The Call Stack defined on MDN [View](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)
  
  2. Understanding the JavaScript Call Stack [View](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/)

  3. JavaScript error messages [view](https://codeburst.io/javascript-error-messages-debugging-d23f84f0ae7c)

  4. Additional Resources

---

> ## 1. The Call Stack defined on MDN
 
 A **call stack** is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.
 
 * When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
 * Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
 * When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
 * If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.
 
 ![call stack](https://miro.medium.com/max/2478/1*rJ2sh-q1deQGGGVG5gYyIQ.png)

---

> ## 2. Understanding the JavaScript Call Stack 

The call stack is primarily used for function invocation (call). Since the call stack is single, function(s) execution, is done, one at a time, from top to bottom. It means the call stack is synchronous.

At the most basic level, a call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call).
 

![LIFO](https://www.mbaskool.com/2020_images/stories/dec_images/lifo.jpg)

---

> ## 3. JavaScript error messages

####  Types of error messages

1. Reference errors
2. Syntax errors
3. Range errors
4. Type errors
5. Debugging
6. Call stack
 
---

> ## 4. Additional Resources
 
  JavaScript errors reference on MDN  [view](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)


---

GitHub Live: [View](https://anassawalha95.github.io/reading-notes/Code%20301/Class%2010)

GitHub Repo: [View](https://github.com/anassawalha95/reading-notes/tree/main/Code%20301)
