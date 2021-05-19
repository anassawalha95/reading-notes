
## Class 30  *May 20 2021:*  [view](https://anassawalha95.github.io/reading-notes/Code%20301/Class%2030)

> ## Topics

   1.Hash Table
   
> ## Resources

   1. [Intro to Hash Tables](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-30/resources/Hashtables.html)
   2. [what is a hash table?](https://www.youtube.com/watch?v=MfhjkfocRR0)
   3. [basics of hash table](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)
   4. [hash table wiki](https://en.wikipedia.org/wiki/Hash_table)
      
---

**what is hash table?** is a data sturcture that allows fast retrieval of data no matter how data there is.

**where the hash table is used?** the hash table is used widely in many different implementations such as: databases , compilers, dictionaries, etc..

**how does hash table works?** 

first of all the hash table uses a key/value pair (associative array) where the hash index is calculated by an algorithm for instance:

suppose that we wants to save a user phone number so the key will be the user name and the value is the phone number. we can use the ascii code in order to generate the hash index

hash table array length = 11

key = Mia 
value= +865 9322 379
index=  sum ascii code % array length 
ascii:
M = 77,  i=105 ,a = 97
index= 77+105+97/11
so the index will be 4

**what is the collision in hash table?** the collision is duplication that happens when the index that is generated has a previous index saved 

**How to solve collision in hash table?** usually the way we solve the collision in by creating a linked list of key value pairs inside the hash table index.


Example: 

![hash table](https://media.geeksforgeeks.org/wp-content/cdn-uploads/implementing-own-hash-table.png)



---

GitHub Live: [View](https://anassawalha95.github.io/reading-notes/Code%20401/Class%2029)

GitHub Repo: [View](https://github.com/anassawalha95/reading-notes/tree/main/Code%20401)
