## Class 07  *Dec 16 2020:*

> # topics

__1. Intoduction to Javascript Language__

__2. Expressions & Operators__

__3. Functions__

---

> ## 1. Intoduction to Javascript Language:

  * ** We use javascrpit in webpages for many different reasons:**
  
A. Access the content of the page

B. Modify the content of the page

C. Program rules or instructions the browser can follow

D. React to events triggered by the user or browser 

---

> ## 2. Expressions & Operators:

### ** An expression evaluates into (results in) a single value. Broadly speaking there are two types of expressions.**
 
 a. Expressions that just assign a value to a variable 
 
    Ex: var color = 'beige'; 
    
 b. Expressions that use two or more values to return a single value
 
    Ex: var area = 3 * 2; 
    
    
 ###  ** Javascript have various of mathematical operators**
    
    
| NAME           | OPERATOR | PURPOSE & NOTES                              | EXAMPLE        |      |
|----------------|----------|----------------------------------------------|----------------|------|
| ADDITION       |    +     | Adds one value to another                    | 10 + 5         | 15   |
| SUBTRACTION    |    -     | Subtracts one value from another             | 10 - 5         | 5    |
| DIVISION       |    /     | Divides two values                           | 10 / 5         | 2    |
| MULTIPLICATION |    *     | Multiplies two values using an asterisk      | 10 * 5         | 50   |
| INCREMENT      |    ++    | Adds one to the current number               | i = 10;  i++;  | i=11 |
| DECREMENT      |    --    | Subtracts one from the current number        | i = 10;  i--;  | i=9  |
| MODULUS        |    %     | Divides two values and returns the reminders | 10 % 3         | 1    |
    
 
 Examples: 
`var subtotal (13 + 1) * 5; II Subtotal is 70`

`var shipping 0.5 * (13 + 1) ; II Shipping is 7`


### Mixing numbers and strings togather 
** When you place quotes around a number, it is a string (not a numeric data type), and you cannot perform addition operations on strings, this is called concatinaction where it combine two differant strings togather**

`var bill1 = '10';
var bill2 = '15 ' ;
var total = billl + bill2;` the result would be 1015

** If you use other mathematical operators you will get `NaN` which is stand for Not A Number** 


#### Try copy & past this example to your text editor  

HTML:

`<hl>Elderflower</ hl>
<div id="content">
<div id="greeting" class="message">Hello
<span id="name">friend</span>!
</div>
</div>
<script src="js/string-operator.js"></script>`


JS:

`var greeting= 'Howdy ';
var name= 'Molly' ;
var welcomeMessage = greeting+ name+ '!';
var el = document.getElementByld('greeting');
el .textContent = welcomeMessage;`




 
 
 
