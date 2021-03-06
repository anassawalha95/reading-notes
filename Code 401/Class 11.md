## Class 11  *Apirl 18 2021:* 

> ## Topics

   1.  Spring App Basics [view](https://spring.io/guides/gs/serving-web-content/)

   2.  Spring MVC and Thymeleaf [view]( https://www.thymeleaf.org/doc/articles/springmvcaccessdata.html)
   
---

> ## 1. Spring App Basics 

**Create your first Hello World spiring App:**

   1. git clone https://github.com/spring-guides/gs-serving-web-content.git

   2. Create a web controller inside servingwebcontent package

             `package com.example.servingwebcontent;
               import org.springframework.stereotype.Controller;
               import org.springframework.ui.Model;
               import org.springframework.web.bind.annotation.GetMapping;
               import org.springframework.web.bind.annotation.RequestParam;
               @Controller
               public class GreetingController {
                  @GetMapping("/greeting")
                  public String greeting(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
                     model.addAttribute("name", name);
                     return "greeting";
                  }
               }`


  

   3. Create index.html inside `src/main/resources/static/` directory
     
            `<!DOCTYPE HTML>
            <html>
            <head> 
                <title>Getting Started: Serving Web Content</title> 
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            </head>
            <body>
                <p>Get your greeting <a href="/greeting">here</a></p>
            </body>
            </html>`


   4. Create greeting.html inside `src/main/resources/templates/` directory
   
            `<!DOCTYPE HTML>
            <html xmlns:th="http://www.thymeleaf.org">
            <head> 
                <title>Getting Started: Serving Web Content</title> 
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            </head>
            <body>
                <p th:text="'Hello, ' + ${name} + '!'" />
            </body>
            </html>`
            
   5. Run the App
   
---


> ## 2. Spring MVC and Thymeleaf: how to access data from templates

   1. Spring model attributes
      
      [Spring model attributes Explanation](https://www.youtube.com/watch?v=stGq8lnEFlM)
   
   2. Request parameters
    
      [Request parameters Explanation](https://www.youtube.com/watch?v=vu7IKvkkz8w)

   3. Session attributes
   
    [Session attributes Explanation](https://www.youtube.com/watch?v=NXMCnNxBip0)
    
   4. ServletContext attributes: "An attribute is an object and when such objects are associated with a ServletContext object, they are called context attributes and are available to the whole application"[source](https://www.decodejava.com/servlet-context-attributes.htm#:~:text=An%20attribute%20is%20an%20object,attributes%20through%20the%20ServletContext%20object.) 
      
      [ServletContext attributes](https://www.youtube.com/watch?v=xoL0FBK2H6A&t=433s)
      
   5. Spring beans

      [Spring beans explained](https://www.youtube.com/watch?v=C3iALyO4FJI)
      
     
---

GitHub Live: [View](https://anassawalha95.github.io/reading-notes/Code%20401/Class%2011)

GitHub Repo: [View](https://github.com/anassawalha95/reading-notes/tree/main/Code%20401)
