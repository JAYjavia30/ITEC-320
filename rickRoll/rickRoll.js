document.getElementById("bold").onclick=boldClick;
document.querySelector("#italic").onclick=italicClick;
document.querySelector("#serif").onclick=fontClick;
document.querySelector("#fantasy").onclick=fontClick;
document.querySelector("#monospace").onclick=fontClick;

let lyrics = document.querySelector("#lyrics");

function fontClick(){
    lyrics.style.fontFamily = this.id;
    let oldSize = parseInt(lyrics.style.fontSize) || 12;
    let newSize = oldSize + 2;
    lyrics.style.fontSize = newSize + "pt";
}

    function boldClick(){
    if (this.checked)
        lyrics.style.fontWeight = "bold";
    else
        lyrics.style.fontWeight = "normal";
}

function italicClick(){
    if (this.checked)
        lyrics.style.fontStyle = "italic";
    else
        lyrics.style.fontStyle = "normal";
}
