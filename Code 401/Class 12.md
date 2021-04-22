## Class 12  *Apirl 19 2021:* 

> ## Topics

   1.  Baeldung: Spring Request Mapping [view](https://www.baeldung.com/spring-requestmapping)
   2.  Spring guide: Accessing Data with JPA [view](https://spring.io/guides/gs/accessing-data-jpa/)
   3.  Baeldung: Comparing repositories [view](https://www.baeldung.com/spring-data-repositories)
   
---


> ## 1. Baeldung: Spring Request Mapping

**Spring Request Mapping** in java Spring is used for defining routes where you can apply these routes in you html forms for instance or use it for API

**Usage:** There are many forms for Request mapping from narrowing every thing in the request or use its shorcuts where they are:

@GetMapping
@PostMapping
@PutMapping
@DeleteMapping
@PatchMapping

Example:

      `@GetMapping("/{id}")
      public ResponseEntity<?> getBazz(@PathVariable String id){
          return new ResponseEntity<>(new Bazz(id, "Bazz"+id), HttpStatus.OK);
      }`

Further Explination:

[Request Mapping](https://www.youtube.com/watch?v=RR8v3Rb7B38)

---


> ## 2. Accessing Data with JPA

**What is Java JPA Repository** JPA Stand for (Java Persistence API) where it used for accessing databases, and interacting  with it throw java objects in relational databases

**JPA Methods:** In order to interact with databases there are a set of methods that comes with the JPA library to use [sourse](https://docs.spring.io/spring-data/jpa/docs/current/api/org/springframework/data/jpa/repository/JpaRepository.html)
1. `findAll()`
2. `save()`
3. `flush()`
4. `saveAndFlush()`
5. `deleteInBatch()`


---

> ## 3. Baeldung: Comparing repositories

**There are Three main reopsitory that is used in Sping for handling data:**
1. CRUD Repository
2. Paging And Sorting Repository 
3. Jpa Repository

**To understand these repositories and is difference:** lets assume that the CRUD Repository is a grandparent and the  Paging And Sorting Repository  is a parent and  Jpa Repository is a Child so these three are inheriting starting from the child to the grandparent. 

[repositories differences explind](https://www.youtube.com/watch?v=HULmxjPB0cM)

---

GitHub Live: [View](https://anassawalha95.github.io/reading-notes/Code%20401/Class%2012)

GitHub Repo: [View](https://github.com/anassawalha95/reading-notes/tree/main/Code%20401)
