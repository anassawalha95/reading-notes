## Class 09  *Apirl 14 2021:*  [view](https://anassawalha95.github.io/reading-notes/Code%20301/Class%2009)

> ## Topics

   1. Review: High-level HTTP [view](https://dev.to/dangolant/things-i-brushed-up-on-this-week-the-http-request-lifecycle-)
   
   2. Java HTTP Request example [view](https://www.baeldung.com/java-http-request)  
   
---

> ## 1. Review: High-level HTTP: 
  
**The Life-Cycle of Http Request:**
  
  1. **Local Processing:** Every link has a schema where there is a website name, port, direcotries and files. all of these schema is processed and taken part 
   
   ![http](https://doepud.co.uk/images/blogs/complex_url.png)
  
  2. **Resolve an IP:** 
   * every domain name (website name) has an Ip address in the background where every time you make a request there is a mechanism thats transfare the DNS (Domain name server) to an IP address tre use this website to resovle the Ip address of any website [link](https://www.whatismyip.com/dns-lookup/)
   * So every time you visit a website there will be a connection established before you reach the prefared website where at the begining it well look up the IP address that you try to reach by appling serveral algorithims. 
   
  3. **Establish a TCP Connection:** TCP stands for Transmission Control Protocol. After the required destination is found to TCP can talk to server and both servers is communicating but first the TCP once it does reach its destiniation it send a packets that will check that the sever is alive 
  
  4. **Send an HTTP Request:** now the client have a TCP and an IP to talk to other servers by using HTTP protocol.
  
  5. **Tearing Down and Cleaning Up** After the both servers is done talking now the tcp will terminate the connection and send a final masseage close the channle and caches informations about the other server.

    
![The Life-Cycle of Http Request](https://www.youtube.com/watch?v=eesqK59rhGA)

---

> ## 2. Java HTTP Request example:
 
 Here is a Video that indicates how to create Http Request throw java in details
 
 ![HTTP Request in Java](https://www.youtube.com/watch?v=qzRKa8I36Ww)


---

GitHub Live: [View](https://anassawalha95.github.io/reading-notes/Code%20401/Class%2008)

GitHub Repo: [View](https://github.com/anassawalha95/reading-notes/tree/main/Code%20401)
