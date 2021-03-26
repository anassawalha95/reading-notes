## Class 01  *Mar 28 2021:*

> ## Topics

   1. JAVA Basics [view](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/index.html)
    
   2. Code Compiling [view](https://www.reddit.com/r/explainlikeimfive/comments/233dq5/eli5_what_does_it_mean_to_compile_code/) 
    
   3. XKCD: Compiling [view](https://xkcd.com/303/)
   
   4. Reading Java Documentation [view](https://www.dummies.com/programming/java/making-sense-of-javas-api-documentation/)

---


> ## 1.  JAVA Basics

![JAVA](https://miro.medium.com/max/8642/1*iIXOmGDzrtTJmdwbn7cGMw.png)

**Language Basics**

1. **Variables**

   You've already learned that objects store their state in fields. However, the Java programming language also uses the term "variable" as well. This section discusses this relationship, plus variable naming rules and conventions, basic data types (primitive types, character strings, and arrays), default values, and literals.

**The Java programming language defines the following kinds of variables:**

   1. Instance Variables (Non-Static Fields)
   2. Class Variables (Static Fields)
   3. Local Variables
   4. Parameters 
   5. 
2. **Operators**

   This section describes the operators of the Java programming language. It presents the most commonly-used operators first, and the less commonly-used operators last. Each discussion includes code samples that you can compile and run.
  
|       Operators      |                Precedence               |
|:--------------------:|:---------------------------------------:|
| postfix              | expr++ expr--                           |
| unary                | ++expr --expr +expr -expr ~ !           |
| multiplicative       | * / %                                   |
| additive             | + -                                     |
| shift                | << >> >>>                               |
| relational           | < > <= >= instanceof                    |
| equality             | == !=                                   |
| bitwise AND          | &                                       |
| bitwise exclusive OR | ^                                       |
| bitwise inclusive OR | \|                                      |
| logical AND          | &&                                      |
| logical OR           | \|\|                                    |
| ternary              | ? :                                     |
| assignment           | = += -= *= /= %= &= ^= \|= <<= >>= >>>= |

3. **Expressions, Statements, and Blocks**

Operators may be used in building expressions, which compute values; expressions are the core components of statements; statements may be grouped into blocks. This section discusses expressions, statements, and blocks using example code that you've already seen.



4. **Control Flow Statements**

This section describes the control flow statements supported by the Java programming language. It covers the decisions-making, looping, and branching statements that enable your programs to conditionally execute particular blocks of code.

The statements inside your source files are generally executed from top to bottom, in the order that they appear. Control flow statements, however, break up the flow of execution by employing decision making, looping, and branching, enabling your program to conditionally execute particular blocks of code. This section describes the decision-making statements (if-then, if-then-else, switch), the looping statements (for, while, do-while), and the branching statements (break, continue, return) supported by the Java programming language.

---

> ## 2.  Code Compiling

everything in a computer is represented by a series of 1's and 0's (which themselves represent high and low voltages on transistors, but that's a topic for another time). When the computer runs a program, the program itself is made of a bunch of 1's and 0's.

However, since we still need humans to write our programs, putting everything in 1's and 0's (called machine language) would be very difficult. So we made higher level languages like Java and C# to write code in. These languages look a lot more like English, so they're a lot easier to write and maintain.

When you compile code, the compilor (usually another program) takes the program the human wrote, and converts it into the program the computer can understand (i.e. converts from Java to machine language). The very short version could be, yes, compile means to make the code executable.

---

> ## 3.  XKCD: Compiling 

XKCD Compiling comic

---

> ## 4.  Reading Java Documentation 

**The Decomentation of Java**

---

GitHub Live: [View](https://anassawalha95.github.io/reading-notes/Code%20401/Class%2001)

GitHub Repo: [View](https://github.com/anassawalha95/reading-notes/tree/main/Code%20401)
