## Class 08  *Apirl 13 2021:*  [view](https://anassawalha95.github.io/reading-notes/Code%20301/Class%2008)

> ## Topics

   1. SOLID principles intro [view](https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)
   
   2. OO SOLID principles in real life [view](https://dzone.com/articles/the-solid-principles-in-real-life)  
   
---

> ## 1.SOLID principles intro: 
 
 **The SOLID principle was introudced by Robert C. Martin(uncle Bob) and it stands for:**
 
  1. S - Single-responsiblity Principle: this mean the class has to have only one reason to be or to change
  2. O - Open-closed Principle: it means that you dont change the class instead you use the interface approch to implement in each class
  3. L - Liskov Substitution Principle: lets consider that we have class of type T and a class of type S that inherates the class of type T. The class of type T  can do a thing and the class of type S must do the same thing as the class of type T. for example if we have a bird class with the method of can fly and have a chicken class that extends the bird class but bird can't fly so this is wrong. In this princiable every sub class can do what parent class can 
  4. I - Interface Segregation Principle: it means if we define an interface the class must not implement the interface unless it will use 
  5. D - Dependency Inversion Principle: in this principle we always think about each class if its a low level or a high level like sql connection and passowrd verification where both of them are dependent because if we have a cross between both of them we well end up changing the password verification each time we change the sql engin so every time we change the sql engin it wont affect the password verification.


---

GitHub Live: [View](https://anassawalha95.github.io/reading-notes/Code%20401/Class%2008)

GitHub Repo: [View](https://github.com/anassawalha95/reading-notes/tree/main/Code%20401)
