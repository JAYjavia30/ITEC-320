let squarearea = document.getElementById("squarearea");
let squareCount = parseInt(Math.random() *21) + 30; // 30-50

for (let i = 0; i < squareCount; i++) {
    let square =document.createElement("div");
    square.className="square";
square.style.backgroundColor=getRandomColor();

   square.style.top=parseInt(Math.random() * (300-50))+ "px";
    square.style.left=parseInt(Math.random() *(700-50)) + "px";
    squarearea.append(square);
}

function getRandomColor() {
    let possibleLetters="0123456789ABCDEF";
    let color="#";
    for (let i = 0; i < 6; i++) {
        let position = parseInt(Math.random() * possibleLetters.length);
        color+=possibleLetters.charAt(position);
    }
    return color;
}

