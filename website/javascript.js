

function changeBackgroundColor(e) {

    var color = prompt("Please A valid Color", " orange, blue , green");
    if (color != null) {
        document.body.style.backgroundColor = color;
    }
    else {
        alert("Noting is Entered")
    }
}

function addProduct() {
    if (document.getElementsByClassName('hidden')[0].style.display === "")
        document.getElementsByClassName('hidden')[0].style.display = "block";
    else if (document.getElementsByClassName('hidden')[0].style.display === "none")
        document.getElementsByClassName('hidden')[0].style.display = "block";

    else
        document.getElementsByClassName('hidden')[0].style.display = "none";
}

let counter = 0;


function imageExists(image_url) { var http = new XMLHttpRequest(); http.open('HEAD', image_url, false); }

function submissionHandler() {



    counter++;
    alert('Thank You ' + document.getElementById('first-name').value + document.getElementById('last-name').value)

    let container = document.getElementById("cards-contanier");
    let section = document.createElement("section");


    let img = document.createElement("img");

    let h1 = document.createElement("h1");


    let p1 = document.createElement("p");


    let p2 = document.createElement("p");


    let p3 = document.createElement("p");
    let button = document.createElement("button");

    let instertedIimg = document.getElementById('product-img').value;
    let instertedProductName = document.getElementById('product-name').value;
    let instertedProductPrice = document.getElementById('product-price').value;
    let instertedProductDescription = document.getElementById('product-description').value;

    let insertedRroductRepeat = document.getElementById('product-repeat').value;





    let Repeat = 1;
    if (instertedIimg != "") {
        img.src = instertedIimg;

    } else {
        alert("Your Product Image is Empty")

        return;
    }



    if (instertedProductName != "") {
        h1.innerHTML = instertedProductName
    } else {
        alert("Your ProductName is Empty")
        return
    }


    if (instertedProductPrice >= 1) {
        p1.innerHTML = instertedProductPrice

    } else {

        alert("Your Product Price is Empty or not a number")
        return
    }



    if (instertedProductDescription != "") {
        p2.innerHTML = instertedProductDescription
    } else {
        alert("Your Product Description is Empty")
        return
    }



    if (insertedRroductRepeat > 1) {

        Repeat = insertedRroductRepeat;
    } else {
        alert(" The insterted  number for product reapeating  is string or empty it will be set to default 1 ")

        Repeat = 1

    }




    section.classList.add("card")

    section.classList.add("price")




    button.innerHTML = "Add to Cart"

    p3.appendChild(button);

    section.appendChild(img)
    section.appendChild(h1)
    section.appendChild(p1)
    section.appendChild(p2)
    section.appendChild(p3)
    section.appendChild(button)



    for (var i = 1; i <= Repeat; i++) {
        container.appendChild(section.cloneNode(true));


    }

    if (Repeat != 0)
        alert("You Added " + counter + " Item/s")




}

