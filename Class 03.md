# Class 03 *Dec 13 2020:*

> # topics

* __GIT__
   1. What is GIT?
   2. Usage

---

![GIT](https://tr3.cbsistatic.com/hub/i/r/2017/10/31/af72d5e4-2f4c-48b5-954c-e4fa24fb0a97/resize/1200x/9f5c03620b98aa0a8d1a3caedded38fe/git-logo.jpg)
> ## 1. What is GIT?

### ***Definition:*** Git is a Version Control that keeps track on changed files and allows different develpers to make changes on the same file at the same time 

---


> ## 2. Usage:

## * Basic Confiquration  
1. you can install Git by typing  `sudo apt-get install git` in Ubuntu terminal 
2. To config you GIT Identity Use 
   1.`git config --global user.name (should return Jane Smith)`
   2.`git config --global user.email (should return example@email.com)`
   
3. To clone files from repo's use  `git clone https://github.com/test`
---
## * What is GIT Life Cycle ?
   ### There is four satges for GIT
   1. Untracked 
   2. Tracked 
   3. Modified
   4. Staged
   
   *check the picture below:*
   ![GIT Stages](https://blog.udemy.com/wp-content/uploads/2015/08/image006.png)
 
 ---
 ## * How to Stage Files ?
   Befor the Staging you should check the files state in Git by utilizing the git status command. After that:- 
   1. add files by using the `git add filename` command for single file or for all files use `git add *` 
   2. To Commit changes use the `git commit -m “made change x,y,z”` *(note that the m stands for message)* or you can use  `git commit -a` To commit all files at once 
   
   
  [referance](https://blog.udemy.com/git-tutorial-a-comprehensive-guide/#2_4)
   
   
