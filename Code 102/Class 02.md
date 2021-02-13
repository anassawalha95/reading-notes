# Class 02 *Dec 13 2020:*
> # topics

__1. Text Editors__

__2. Work Station confiquration__

__3. Ubuntu Installation and configuration__

__4. Installing Tools on Ubuntu__ 

__5. Ubuntu Basic Commands__

---

> ## 1. Text Editors

### ***Definition:*** is a piece of software that you download and install on
your computer, or you access online through your web browser, that
allows you to write and manage text, especially the text that you write
to build a web site.**

### Names Text Editors:

## 1. NotePad++ 

 ![NotePad++](https://www.incrediblelab.com/wp-content/uploads/2020/06/replace-notepad-with-notepad-plus-plus.jpg)

## 2. TextWrangler/BB Edit

![TextWrangler/BB Edit](https://cdn.cultofmac.com/wp-content/uploads/2010/11/20101111-textwrangler.jpg)

## 3. Visual Studio Code

![Visual Studio Code](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png)

## 4. Atom 

![Atom](https://computingforgeeks.com/wp-content/uploads/2019/01/install-atom-text-editor-ubuntu-18.04-linux-mint-19-1024x303.png)

## 5. Brackets 

![Brackets](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brackets_Icon.svg/1200px-Brackets_Icon.svg.png)

## 6. Sublime Text 

![Sublime Text](https://krupitskas.github.io/sublime-rust/sublime_logo.jpeg)

### The Difference Between Text Editors and IDEs:
* A text editor kind of gives away what it does in the title—it edits text.
It also manages text, and manages files. I love that name “text
wrangler” because in a way that’s what really a text editor does. It
wrangles your text together into something meaningful.

* An IDE (Integrated Development Environment) is really a suite of
different software all coming together. An IDE is a text editor, a file
manager, a compiler, and a debugger all in one software package.

---


> ## 2. Work Station confiquration _[referance](https://codefellows.github.io/setup-guide/system-setup/)_:

#### 1- Virtualization:  
 __Go to "Turn Windows Features On Off" Then Enable The Following:__
 
* Virtual Machine Platform
* Windows Hypervisor Platform
* Windows Subsystem for Linux

#### 2- Installing Windows Terminal from Microsoft Store:
__Go to "Microsoft Store" download and install Windows Terminal__

#### 3- Wsl 2
__Go to "Windows Terminal -> PowerShell" Then Type  The Following:__

__wsl --set-default-version 2__
__*if an error is thrown then: visit, download and install [wsl2kernel](https://aka.ms/wsl2kernel)*__


#### 3. Ubuntu Installation:

* Go to "Microsoft Store" download and install __'Ubuntu'__
* Open the Ubuntu after finish Installing and check the wsl version is two by entering  "wsl -l -v"



> ##4. Installing Tools on Ubuntu

#### Use the app-get install <name> to install tools on Ubuntu so far the installed tools are:
 1. code 
 2. git 
 3. node
 4. npm 
 5. eslint 
 6. tree 
 
 __The output of:-__
* code --version: 1.52.0 940b5f4bb5fa47866a54529ed759d95d09ee80be x64
* git --version: git version 2.25.1
* node --version: v10.19.0
* npm --version: 6.14.4
* eslint --version: v5.0.1
* tree --version: tree v1.8.0 (c) 1996 - 2018 by Steve Baker, Thomas Moore, Francesc Rocher, Florian Sesser, Kyosuke Tokoro
* echo $PS1: \[\e]0;\u@\h: \w\a\]${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$
* cat ~/.gitconfig: [user]name = anasswalha95    email = anas.swalha@yahoo.com  [core]editor = emacs
 
 > ##5. Ubuntu Basic Commands [Tutorial](https://ryanstutorials.net/linuxtutorial/commandline.php)
 
* Pwd: print working directory 
* Ls: list
* you can print out the content of a file using ls to print it out in terminal  
* Cd: change directory 
* you can hit tap button to auto fill the folder name after entering a letter or more 
* Makedir: create folder
* Touch: creates a file 
* Chmod: change file type mode


 
 


