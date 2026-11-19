let heading = document.querySelector("#main");
heading.addEventListener("click", ()=>{
    console.log("Main clicked!");
});//event, function

document.querySelector("em").addEventListener("click", ()=>{
    console.log("You clicked the EM element");
});

document.querySelector("body").addEventListener("click", ()=>{
    console.log("You cliked the body element");
});

