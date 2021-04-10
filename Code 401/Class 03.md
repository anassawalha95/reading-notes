## Class 03  *Apirl 6 2021:*  

> ## Topics

   1. Primitives vs. Objects [view](https://www.baeldung.com/java-primitives-vs-objects)

   2. Exceptions in Java [view](https://docs.oracle.com/javase/tutorial/essential/exceptions/index.html) 

   3. Using Scanner to read in a file in Java [view](https://docs.oracle.com/javase/tutorial/essential/io/scanning.html) 


---

> ## 1. Primitives vs. Objects

primitive data type are the basic types in java. while objects data types are references to an object instead. Note that in Java you must define the variable type while in javascript you won't hava the interpreter will know the type on initialization with a value and if you try to print the variable it will print undefind 

**Java has two types:** [source](https://www.baeldung.com/java-primitives-vs-objects)

  1. primitive types: consumes less memory and the default values is 0
        boolean – 1 bit
        byte – 8 bits
        short, char – 16 bits
        int, float – 32 bits
        long, double – 64 bits
        
  2. object types (wrapper types): consumes more memory and  the default values is null 
        
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
  
 **An exception** is a problem happens while during the running time that will disrupt the normal program execution which lead to program halt.
 
  **The Three Kinds of Exceptions**
   1. "The checked exception": that have a block of code where it handles the exception when once occurs and the program can deal with it. 
   2. "The runtime exception": happens on runtime execution where the program has a logical error 
   3. "The error ": these are not an exception it out of the user or the program hands such as out of memory error.

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
     
  }  
}  `


**try with resourse statment exception**

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
