## Class 03  *Apirl 6 2021:*  

> ## Topics

   1. Primitives vs. Objects [view](https://www.baeldung.com/java-primitives-vs-objects)

   2. Exceptions in Java [view](https://docs.oracle.com/javase/tutorial/essential/exceptions/index.html) 

   3. Using Scanner to read in a file in Java [view](https://docs.oracle.com/javase/tutorial/essential/io/scanning.html) 


---

> ## 1. Primitives vs. Objects

**Java has two types:**

  1. primitive types: consumes less memorya and the default values is 0
        boolean – 1 bit
        byte – 8 bits
        short, char – 16 bits
        int, float – 32 bits
        long, double – 64 bits
        
  2. object types (wrapper types): cconsumes more memory and  the default values is null 
        
        Boolean – 128 bits
        Byte – 128 bits
        Short, Character – 128 bits
        Integer, Float – 128 bits
        Long, Double – 192 bits
       
**Every Java type can be array and it holdes space in memory much grater the it defind**
    long, double: m(s) = 128 + 64 s
    short, char: m(s) = 128 + 64 [s/4]
    byte, boolean: m(s) = 128 + 64 [s/8]
    the rest: m(s) = 128 + 64 [s/2]
 
**Java performs a conversion between the primitive and reference types if an actual type is different from the declared one:**
    `Integer j = 1;          // autoboxing`
    `int i = new Integer(1); // unboxing`
    
---

> ## 2. Exceptions in Java
  
 **An exception** is an event that occurs during the execution of a program that disrupts the normal flow of instructions.
 
  **The Three Kinds of Exceptions**
   1. the checked exception: These are exceptional conditions that a well-written application should anticipate and recover from.
   2. the error exception: These are exceptional conditions that are external to the application, and that the application usually cannot anticipate or recover from
   3. the runtime exception: These are exceptional conditions that are internal to the application, and that the application usually cannot anticipate or recover from.

**Throw an exception**

Example: 
`public class TestThrow1{  
   static void validate(int age){  
     if(age<18)  
      throw new ArithmeticException("not valid");  
     else  
      System.out.println("welcome to vote");  
   }  
   public static void main(String args[]){  
      validate(13);  
      System.out.println("rest of the code...");  
  }  
}  `


**try with resourse statment exceotion**

Example:

`try (Scanner scanner = new Scanner(new File("test.txt"))) {
    while (scanner.hasNext()) {
        System.out.println(scanner.nextLine());
    }
} catch (FileNotFoundException fnfe) {
    fnfe.printStackTrace();
}`

**Unchecked Exception** 
in Java is those Exceptions whose handling is NOT verified during Compile time. These exceptions occurs because of bad programming.

example:

`private static void divideByZero() {
    int numerator = 1;
    int denominator = 0;
    int result = numerator / denominator;
}`

**Advantage of exceptions**

1. Separating Error-Handling Code from "Regular" Code
2. Propagating Errors Up the Call Stack
3. Grouping and Differentiating Error Types



---

> ## 3.  Scanner in Java

**The Scanner file is used to read files in java and inside java.util package  **

Example:

      `import java.util.Scanner;
      public class ScannerDemo1
      {
          public static void main(String[] args)
          {
              // Declare the object and initialize with
              // predefined standard input object
              Scanner sc = new Scanner(System.in);

              // String input
              String name = sc.nextLine();

              // Character input
              char gender = sc.next().charAt(0);

              // Numerical data input
              // byte, short and float can be read
              // using similar-named functions.
              int age = sc.nextInt();
              long mobileNo = sc.nextLong();
              double cgpa = sc.nextDouble();

              // Print the values to check if the input was correctly obtained.
              System.out.println("Name: "+name);
              System.out.println("Gender: "+gender);
              System.out.println("Age: "+age);
              System.out.println("Mobile Number: "+mobileNo);
              System.out.println("CGPA: "+cgpa);
          }
      }`



---

GitHub Live: [View](https://anassawalha95.github.io/reading-notes/Code%20401/Class%2003)

GitHub Repo: [View](https://github.com/anassawalha95/reading-notes/tree/main/Code%20401)
