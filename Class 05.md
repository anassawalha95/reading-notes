
> ## Class 05  *Dec 15 2020:*

__1. Introducing CSS__

__2. How CSS works__

__3. Colors__

> ## 1. Introducing CSS:
  ### ***CSS Stands For:*** cascading style sheets, it allow you to create rules to HTML Tags in order to design it after structuring the web page with HTML 
  

> ## 2. How CSS works:
  ### CSS untilize selectors on HTML tags by:
    1. creating a new  .css file 
    2. useing selectors:
      * selector are consist of <selector name> { key:value; }
        For Example: p {font-size: 75%;}
          
 ### Types of Selectors: 
| **Selector**                  | **Meaning**                                                                                                                            |  **Example** 
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Universal Selector        | Applies to all elements in the document                                                                                            | * {} Targets all elements on the page                                                                                                                                                                          |           
| Type Selector             | Matches element names                                                                                                              | h1, h2, h3 {} Targets the , and elements                                                                                                                                                                       |
| Class Selector            | Matches an element whose class attribute has a value that matches the one specified after the period (or full stop) symbol         | .note {} Targets any element whose class attribute has a value of note p.note {} Targets only elements whose class attribute has a value of note                                                               |
| ID Selector               | Matches an element whose id attribute has a value that matches the one specified after the pound or hash symbol                    | #introduction {} Targets the element whose id attribute has a value of introduction                                                                                                                            |
| Child Selector            | Matches an element that is a direct child of another                                                                               | li>a {} Targets any elements that are children of an element (but not other elements in the page) p a {}Targets any  elements that’s it inside a element, even if there are other elements nested between them |
| Descendant Selector       | Matches an element that is a descendent of another specified element (not just a direct child of that element)                     | p a {}Targets any elements that’s it inside a element, even if there are other elements nested between them                                                                                                    |
| Adjacent Sibling Selector | Matches an element that is the next                                                                                                | h1+p {} Targets the first element after any element (but not other elements)                                                                                                                                   |
| General Sibling Selector  | Sibling of another Matches an element that is a sibling of another, although it does not have to be the directly preceding element | h1~p {} If you had two elements that are siblings of an element, this rule would apply to both                                                                                                                 |


---


> ## 2. Colors:

### How to specify colors: 
  ** Colors are very divergent where you can pick from 10 million colors, in order to use colors in style sheets you can pick and chosse from these methods :
  1. RGB  : `rgb(102,205,170)`
  2. Hex Codes  : `#66cdaa`
  3. Color Names: `MediumAquaMarine`
  4. HSL        :  `hsl(0, 100%, 50%)`
  5. RGBA : `rgba(102,205,170,1)` *the a value stands for opacity*
  
### Colors Properties:
  ** There are two main colors properties in Css:
  
  1. background-color
  2. color : to set the text color 
 
##### Examples:

* body {background-color: rgb(200,200,200);}
* h1 {background-color: DarkCyan;}
* h2 {background-color: #ee3e80;}
* p {background-color: white;}


---


