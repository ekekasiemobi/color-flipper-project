const body = document.getElementsByTagName("body")[0];

function setColor(bColor){
    body.style.backgroundColor = bColor
}

function randomColor(){
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    // return {red, green, blue};
    document.getElementById("show").innerHTML = `${red}`
}

// const {red} = randomColor()
// document.getElementById("show").innerHTML = `${red}`

randomColor()