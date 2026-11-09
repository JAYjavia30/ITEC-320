let POSSIBLE_WORDS= ["obdurate", "verisimilitude", "defenestrate", 
    "obsequious","dissonant","toady","imdempotent"]

let guesses ="";
let word="";

let MAX_GUSSES=6;
let guessCount = MAX_GUSSES;
   
function newgame(){
    guesses="";
    guessCount=MAX_GUSSES;

     let randomIndex= parseInt(Math.random()* POSSIBLE_WORDS.length);
      word= POSSIBLE_WORDS[randomIndex];
      updateScreen();
     
}

function guess(){

    if (word==""){
        return;
    }
    let input= document.getElementById("guess");
    let letter= input.value;
    letter= letter.toLowerCase();

    if (letter==""){
        return;
    }

    if ( guesses.indexOf(letter)>=0) {
        return;
    }

    let clueString="";

    for(let i=0; i< word.length; i++){
        if(guesses.indexOf(word.charAt(i))<0){
            clueString += "_";
        }
    }

    if (guessCount ==0 || clueString.indexOf("_")<0){
        return;
    }


    if(word.indexOf(letter)<0){
        guessCount--;
    }

    guesses+= letter;
    input.value ="";
    updateScreen();
    
}

function updateScreen(){
    let clueString="";
     for (let i=0; i<word.length; i++){
        let letter= word.charAt(i);
        if(guesses.indexOf(letter)>=0){
            clueString+=letter+" ";
        }
        else{
        clueString+="_ "; }
     }

     let clue=document.getElementById("clue");
     clue.textContent= clueString;

     let guessArea=document.getElementById("guesses");
     guessArea.textContent="Guessed Letters:"+guesses;

     let image=document.getElementById("hangmanpic");
     image.src=`images/hangman${guessCount}.gif`;
    
     if (clueString.indexOf("_") <0 && word !=""){
        guessArea.textContent += " - You WON"
     }

     if(guessCount==0){
        guessArea.textContent += " - You Lost";
     }
}