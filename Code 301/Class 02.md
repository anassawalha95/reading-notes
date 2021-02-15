  
> # Class 01  *FEB 14 2021:*

> ## Topics
  

  1. JavaScript and jQuery 
    
  2. 6 Reasons for Pair Programming [view](https://www.codefellows.org/blog/6-reasons-for-pair-programming/) 
   
   
---

> ## 1.  JavaScript and jQuery 

#### HTML5 Events

![HTML5 EVENTS](https://csharpcorner.azureedge.net/UploadFile/2072a9/events-in-html5/Images/Events%20in%20HTML5.jpg)

**There are three page-level events that have been included in versions of the HTML5:**

  1. DOMContentLoaded: Event fires when the DOM tree is formed (images, CSS, and JavaScript might still be loading).
      example: 
                window.addEventlistener('DOMContentloaded' , setup, false);
  
  2. hashchange: Event fires when the URL hash changes (without the entire window refreshing).
  
  3. beforeunload: Event fires on the window object before the page is unloaded. It should only be used to help the user (not to encourage them to stay on a website if they are trying to leave).
  
----

#### Jquery

**What is Jquery?**

**jQuery** is a lightweight, "write less, do more", JavaScript library. The purpose of jQuery is to make it much easier to use JavaScript on your website. jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.
  
![Jquery selector](https://lh3.googleusercontent.com/proxy/BGyGkxo0K0b8XJlpM1PVZQvRJFsHRHKZ6PKZcOftT8rvRvJA_ccznqm8Af-3lipd3wis3lVPy3uiCnhauekzv-xyN7HeeCEVx13jYeHWD86km4A)
  
#### Loading Jquery From a CDN  

**use the CDN to directly include the jquery **

        <script src=" //ajax .googl eapi s . com/ ajax/l i bs/ jquery / 1.10 . 2/ jquery .min. js ">
        </ script>
        or
        <script>
        window.jQuery || document.write(' <script src=" j s/j query- 1.10. 2 . j s 11><\jscri pt> ' )
        </script>

---
  
> ## 2.  6 Reasons for Pair Programming 
