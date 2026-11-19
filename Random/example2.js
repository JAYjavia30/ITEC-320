let wordList = document.querySelector("#word-list");
let sentence = document.querySelector("#sentence");

wordList.addEventListener("click",  event => {
let word = event.target.textContent;
  sentence.textContent += word;
  sentence.textContent += " ";
});

document.querySelector("html").addEventListener("mousemove",e=>{
    // console.log(`Mousemove x: ${e.clientX}, y: ${e.clientY}`);
    box.style.left = e.clientX-10 + "px";
    box.style.top = e.clientY-10 + "px";
} );

