## Class 06  *Apirl 11 2021:*  

   1. Java OO Tutorial  [view](https://docs.oracle.com/javase/tutorial/java/concepts/)
   
   2. Java Inheritance & Interfaces Tutorial [view](https://docs.oracle.com/javase/tutorial/java/IandI/index.html)  
---

> ## 1. Java Object Orianted Interfaces & Packages

**What is the Interface?** the interface a TODO list where it only hava a heading of what needs to be done, its looks like a class but its not. you define any method that the developer must add to his classes.The interface can hold only abstarct variables and method the both of them is static and final. we also use the keyword `implement` to use on a class.


**For Example:**

`interface Employee{
  void displaySalary();
  public static int baseSalary=1000;
    }

class Emps implements Employee {
void displaySalary {
System.out.print(baseSalary);
  }
}
`


**What Is a Package?** package is like a bag where it holds things usually related to each other like chocolate inside one bag with different types like white chocolate and dark chocolate. the package is a set of grouped classes used to combine them togather like a folder.

**Example on usage** 

`package chocolateBag;
public class chocolateBagPackage {
  public static void main(String[] args) {
    System.out.println("This class is inside the chocolateBag package.");
  }
}`

---

GitHub Live: [View](https://anassawalha95.github.io/reading-notes/Code%20401/Class%2006)

GitHub Repo: [View](https://github.com/anassawalha95/reading-notes/tree/main/Code%20401)
