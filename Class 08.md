
> # Class 08  *Dec 16 2020:*

> ## topics

__1. **Comparison and logical operators**__

__2. **Loops**__


---


> ## 1. Comparison and logical operators:

> ## 2. Loops
> #### Comparison operators
  * **You can evaluate a situation by comparing one value in the script to what you expect it might be. The result will be a Boolean: true or false**
  
   * **Types of Comparison operators:**
   
| NAME                    | OPERATOR | PURPOSE & NOTES                                                  |
|-------------------------|:--------:|------------------------------------------------------------------|
| Is Equal To             |    ==    | Compare value true if are equal                                  |
| Is Not Equal To         |    !=    | Compare value true if are not equal                              |
| Strict Equal To         |    ===   | Compare value and type true if are equal                         |
| Strict Not Equal To     |   !===   | Compare value and type false if both aren't equal                |
| Grater Than             |     >    | Checks if number on the left greater than on the right           |
| Less Than               |     <    | Checks if number on the left less than on the right              |
| Grater Than or Equal To |    >=    | Checks if number on the left greater than or equal on the right  |
| Less Than or Equal To   |    <=    | Checks if number on the left less than or equal on the right     |


Example:
    ` var pass = 50; II Pass mark
      var score = 90; II Score
      II Check if t he user has passed
      var hasPassed = score >= pass;
      II Write the message i nt o the page
      var el = document .getEl ementByld(' answe r ');
      e 1 . t extContent = 'Leve 1 passed: ' + has Passed; `
      
      
      
  
> ####  logical operators:   

 * **Logical operators allow you to compare the results of more than one comparison operator.**
  
 * **Types logical operators:**
 
| NAME        | OPERATOR | PURPOSE & NOTES                                            |
|-------------|:--------:|------------------------------------------------------------|
| Logical And |    &&    | This operator tests more than one condition                |
| Logical Or  |   \|\|   | This operator tests at least one condition                 |
| Logical !   |     !    | This operator takes a single Boolean value and inverts it  |

Example: 

    `var scorel = 8; II Round 1 score
    var score2 = 8; II Round 2 score
    var passl 6; II Round 1 pass mark
    var pass2 = 6; II Round 2 pass mark
    II Check whether user passed both rounds , store result in variable
    var passBoth = (scorel >= passl) && (score2 >= pass2);
    II Create message
    var msg = 'Both rounds passed: ' + passBoth;
    II Write the message i nto the page
    var el = document.getElementBy!d( 'answer') ;
    el.textContent = msg; `
    
 ---
      
> ## 2. Loops: 

  * **Loops:** check a condition. If it returns **true**, a code block will run Then the condition will be checked again and if it still returns **true** the code block will run again. It repeats until the condition returns **false** 
  
  * **Types of Loops:**
 
| TYPE     |
|----------|
| For      |
| while    |
| Do While |

![l]


      
