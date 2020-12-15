
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


## HTML & CSS Project:

## The HTML PAGE:
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>class 5 </title>
    <link rel="stylesheet" href="./sytle.css">
</head>

<body>
    <div classc="container">
        <header>
            <img class="website-logo"
                src="https://images.creativemarket.com/0.1.0/ps/7233449/1820/1214/m1/fpnw/wm0/creative-bee-ilustration-logo-design-inspiration-with-hexagon-shape-.jpg?1572658066&s=6d19f7f997976c564d408528face6735"
                alt="logo">
            <h1 class="Website-name">Beekeepers Store

            </h1>


            <nav class="nav-links">

                <a href="#">Home</a>
                <a href="#">How To Use It</a>
                <a href="#">Tools</a>
                <a href="#">Store</a>
                <a href="#">Contact us</a>
                <a href="#">About us</a>
                <a href="#" class="right">Shoping Cart</a>
                <a href="#" class="right">Sign In</a>
                <a href="#" class="right">Sign Up</a>

            </nav>
        </header>
        <main>
            <article class="main-article">
                Beekeeping (or apiculture) is the maintenance of bee colonies, commonly in man-made hives, by humans.
                Most
                such bees are honey bees in the genus Apis, but other honey-producing bees such as Melipona stingless
                bees
                are also kept. A beekeeper (or apiarist) keeps bees in order to collect their honey and other products
                that
                the hive produce (including beeswax, propolis, flower pollen, bee pollen, and royal jelly), to pollinate
                crops, or to produce bees for sale to other beekeepers. A location where bees are kept is called an
                apiary
                or "bee yard".
            </article>
            <div class="cards-contanier">

                <h2 class="heading">Our products</h2>
                <section class="card">
                    <img src="https://morningchores.com/wp-content/uploads/2016/11/Amazon-Hive-600x600.jpg"
                        alt="Denim Jeans" style="width:100%">
                    <h1>Hives</h1>
                    <p class="price">$12.99</p>
                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim
                        lorem
                        jeansum.</p>
                    <p><button>Add to Cart</button></p>
                </section>

                <section class="card">
                    <img src="https://morningchores.com/wp-content/uploads/2016/11/bee-frames.jpg" alt="Denim Jeans"
                        style="width:100%">
                    <h1>Frames</h1>
                    <p class="price">$1.99</p>
                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim
                        lorem
                        jeansum.</p>
                    <p><button>Add to Cart</button></p>
                </section>
                <section class="card">
                    <img src="https://morningchores.com/wp-content/uploads/2016/11/bee-smoker.jpg" alt="Denim Jeans"
                        style="width:100%">
                    <h1>Hives</h1>
                    <p class="price">$14.99</p>
                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim
                        lorem
                        jeansum.</p>
                    <p><button>Add to Cart</button></p>
                </section>
                <section class="card">
                    <img src="https://morningchores.com/wp-content/uploads/2020/06/Hive-tool-800x735.jpg"
                        alt="Denim Jeans" style="width:100%">
                    <h1>Smoker</h1>
                    <p class="price">$17.99</p>
                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim
                        lorem
                        jeansum.</p>
                    <p><button>Add to Cart</button></p>
                </section>
                <section class="card">
                    <img src="https://morningchores.com/wp-content/uploads/2016/11/queen-catcher.jpg" alt="Denim Jeans"
                        style="width:100%">
                    <h1>Hive Tool</h1>
                    <p class="price">$4.99</p>
                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim
                        lorem
                        jeansum.</p>
                    <p><button>Add to Cart</button></p>
                </section>
                <section class="card">
                    <img src="https://morningchores.com/wp-content/uploads/2016/11/Amazon-bee-suit-2-372x800.jpg"
                        alt="Denim Jeans" style="width:100%">
                    <h1>Queen Catcher</h1>
                    <p class="price">$13.99</p>
                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim
                        lorem
                        jeansum.</p>
                    <p><button>Add to Cart</button></p>
                </section>
                <section class="card">
                    <img src="https://morningchores.com/wp-content/uploads/2016/11/Amazon-bee-gloves.jpg"
                        alt="Denim Jeans" style="width:100%">
                    <h1>Bee Suit</h1>
                    <p class="price">$122.99</p>
                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim
                        lorem
                        jeansum.</p>
                    <p><button>Add to Cart</button></p>
                </section>
                <section class="card">
                    <img src="https://morningchores.com/wp-content/uploads/2016/11/hunter-boots.jpg" alt="Denim Jeans"
                        style="width:100%">
                    <h1>Gloves</h1>
                    <p class="price">$11.99</p>
                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim
                        lorem
                        jeansum.</p>
                    <p><button>Add to Cart</button></p>
                </section>

                <section class="card">
                    <img src="https://morningchores.com/wp-content/uploads/2016/11/essential-oils-2.jpg"
                        alt="Denim Jeans" style="width:100%">
                    <h1>Shoes</h1>
                    <p class="price">$12.99</p>
                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim
                        lorem
                        jeansum.</p>
                    <p><button>Add to Cart</button></p>
                </section>

                <section class="card">
                    <img src="https://morningchores.com/wp-content/uploads/2016/11/hive-top-feeder-2.jpg"
                        alt="Denim Jeans" style="width:100%">
                    <h1>Essential Oils</h1>
                    <p class="price">$11.99</p>
                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim
                        lorem
                        jeansum.</p>
                    <p><button>Add to Cart</button></p>
                </section>

            </div>
            <div class="tutorial-container">

                <h2 class="heading">Beekeeping Tutorial</h2>
                <article class="bees-article">
                    <div class="slide">
                        <h2>01: Buy the Bees</h2>
                        <img src="https://www.thespruce.com/thmb/L6FAu7VxlDZn38gN1D20NO4B75I=/2024x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GA01041-56a885a13df78cf7729e88b9.jpg"
                            alt="">
                        <p>
                            It might seem strange to order bees before you get everything else together for beekeeping,
                            but
                            it's
                            important because most places don't have bees for sale by the time spring is well underway.
                            January
                            is
                            the time to order your bees for shipment or pickup in April or May.
                            Local beekeeping associations are a great place to start asking around for bees. And you'll
                            want
                            to
                            decide whether package bees, nucs, catching a swarm, or buying an already-started hive is
                            the
                            right
                            choice for you. Each has its advantages and disadvantages.
                        </p>
                    </div>

                    <div class="slide">
                        <h2>02: Choose Your Hive System</h2>
                        <img src="https://www.thespruce.com/thmb/PqpNN1WeYoePEyi0qaY_Zx80Wcw=/2062x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/beehives-in-corner-of-sunflower-field-671410820-559e450321cb4a429bd4cf7a9ba8f4ee.jpg"
                            alt="">
                        <p>
                            Two main systems are used in beekeeping. One is called the Langstroth hive, and it's
                            composed of
                            boxes
                            that are stacked on top of each other, each containing frames where the bees build their
                            comb
                            and
                            store
                            honey. You pull the boxes out like drawers to access the bees, harvest honey, and perform
                            maintenance
                            tasks. You can add boxes vertically if your hive needs more space.

                            The other is a top-bar hive, where the bees' frames are arranged horizontally, not
                            vertically.
                            The
                            bees
                            make comb without foundation in this system. Each bar, containing comb and honey, is pulled
                            up
                            out
                            of
                            the hive from the top.

                            You'll need to choose which system is right for your needs. Most beekeepers use a Langstroth
                            hive.
                        </p>
                    </div>

                    <div class="slide">
                        <h2>03: Gather Beekeeping Supplies</h2>
                        <img src="https://www.thespruce.com/thmb/bCaNsHlrjSAydu1CY4ZW-86EFKA=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/beehive-with-smoker-1182982393-9126debf8b31407a8ac1a3cb0665d32f.jpg"
                            alt="">
                        <p>
                            Keeping bees requires an investment upfront in supplies. Once you've decided on the type of
                            hive,
                            you'll
                            need to purchase that, but you'll also need a few bee tools, some protective clothing, and
                            feeding
                            supplies. You can also brush up on your bee information by reading some beginner beekeeping
                            books.
                        </p>

                    </div>
                    <div class="slide">
                        <h2>04: Introduce Bees to the Hive</h2>
                        <img src="https://www.thespruce.com/thmb/H_d8hOL0y5WOWvAAyoqEenxlkfg=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Molly_watson_beehive9-56a885333df78cf7729e864a.jpg"
                            alt="">
                        <p>
                            Now comes the fun part! Your bees have arrived, and it's time to set up the hive and get
                            them
                            settled.
                            You need to safely and comfortably introduce the bees to their new home. Then, sit back and
                            let
                            them
                            settle in while you observe the comings and goings. So much fun!
                        </p>
                    </div>

                    <div class="slide">
                        <h2>05: Keep Your Bees Healthy and Happy</h2>
                        <img src="https://www.thespruce.com/thmb/kY2EcNwGTJqyEhXAZ09RSZDXuqA=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bee-hive-on-a-frame--176942981-53ab29af2a714701847449caeac3f66a.jpg"
                            alt="">
                        <p>
                            Month by month, season by season, bees need ongoing care. But they don't require a huge time
                            investment.
                            You must check on them somewhat frequently, but observation is a good percentage of what
                            you'll
                            do
                            to
                            keep your bees happy. Just watching hive activity can be relaxing and informative. You can
                            organize
                            beekeeping tasks by the season, from setting the bees up in spring to harvesting honey, to
                            preparing
                            the
                            hive for winter.
                        </p>
                    </div>
                </article>
            </div>


        </main>
        <footer>
            <section class="fixed-footer">
                <span> Find us on: </span>
                <a href="">Facebook</a>
                <a href="">Instgram</a>
                <a href="">Youtube</a>
                <p>
                    @copyrighs all rights received
                </p>
            </section>


        </footer>
    </div>
</body>

</html>

## The CSS PAGE:
*{
      box-sizing: border-box;
}
body{


    background-color: #eeb720;
    margin:0px;
    padding: 0px;
}

header{
    display: flex;
    align-items: center ;
    justify-content:flex-start;
}


.website-logo{
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: inline-block;
    margin-left:20px ;

    
}
.Website-name{
    color: #c49e35;
    display: inline-block;
    margin-left:20px ;


}


.nav-links {
    display: inline;
    margin-left:20px ;


}
.nav-links a {
    text-decoration: none;
    font-size: 25px;
    color: #c49e35;
    padding: 10px 10px;
    margin-left: 10px;
}

.nav-links a:hover {
    background-color: #c49e35;
    color: white;
    border-radius: 5px;
    box-shadow: -1px 2px 14px -2px rgba(0,0,0,0.75);
    padding: 20px;
    

}

.right{
    align-self: flex-end;
}

.main-article{
    background-color: #adadad;
    color: white;
    padding: 50px;
    font-size: 20px;
    box-shadow: 0px 0px 19px -6px rgba(0,0,0,0.75);
    border-radius: 3px;
    width: 99%;
margin: auto;
opacity: 0.7;
    
}

.main-article:hover{
    
opacity: 1
    
}

.cards-contanier{
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding: 32px; 
    text-align: center; 

}

.heading{
    color: white;
    font-size: 30px;
    border-left: solid white 6px ;
    border-right: solid white 6px ;
    padding: 17px;
    text-align: center;


}
.card {
    box-shadow: 0px 0px 19px -6px rgba(0,0,0,0.75); 
    max-width: 300px;
    margin:  0 auto;
    text-align: center;
    font-family: arial;
    color: white;
    margin-top: 20px;
    display: inline-block;
    text-align: center;
    
  }
  .card img{
      width: 300px;
      height: 300px;
      background-size: cover;
  }
  .price {
    color: rgb(255, 255, 255);
    font-size: 22px;
  }
  
  .card button {
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;

    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }
  
  .card button:hover {
    opacity: 0.7;
  }


  
  .fixed-footer {
  margin-top: 10px;;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: white;
    color: black;
    text-align: center;
    padding: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 16px;

  }

  .fixed-footer a{
    text-decoration: none;
   

  }

  .bees-article{

color: white;
text-align: center;
  }

  .bees-article img{
      width: 400px;
      height: 400px;
      border-radius: 5px;
     
  }

  .slide{
   
      width: 21vw;
      display: inline-table;
  }

 .tutorial-container{ padding: 32px;}
