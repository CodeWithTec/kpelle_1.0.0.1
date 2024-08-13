// defining the variable for use 
let char_1 = document.getElementById('char-1');
let char_2 = document.getElementById('char-2');
let char_3 = document.getElementById('char-3');
let char_4 = document.getElementById('char-4');
let char_5 = document.getElementById('char-5');


// function for the button 
let charFunction_1 = ()=>{
    let cAudio_1 = new Audio("assert/audio/special-charicters/taa.mp3");
    cAudio_1.play();
}
char_1.addEventListener("click", charFunction_1);

let charFunction_2 = ()=>{
    let cAudio_2 = new Audio("assert/audio/special-charicters/kortoe.mp3");
    cAudio_2.play();
}
char_2.addEventListener("click", charFunction_2);

let charFunction_3 = ()=>{
    let cAudio_3 = new Audio("assert/audio/special-charicters/feela.mp3");
    cAudio_3.play();
}
char_3.addEventListener("click", charFunction_3);

let charFunction_4 = ()=>{
    let cAudio_4 = new Audio("assert/audio/special-charicters/last.mp3");
    cAudio_4.play();
}
char_4.addEventListener("click", charFunction_4);

let charFunction_5 = ()=>{
    let cAudio_5 = new Audio("assert/audio/special-charicters/nan.mp3");
    cAudio_5.play();
}
char_5.addEventListener("click", charFunction_5);