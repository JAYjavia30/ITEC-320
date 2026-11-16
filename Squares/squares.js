let squarearea = document.getElementById("squarearea");
let squareCount = parseInt(Math.random() *21) + 30; // 30-50

for (let i = 0; i < squareCount; i++) {
    let square =document.createElement("div");
    squareArea.append(square);
