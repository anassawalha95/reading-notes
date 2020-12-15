

function changeBackgroundColor() {
    var color = prompt("Please A valid Color", " orange, blue , green");
    if (color != null) {
        document.body.style.backgroundColor = color;
    }
    else {
        alert("Noting is Entered")
    }
}

