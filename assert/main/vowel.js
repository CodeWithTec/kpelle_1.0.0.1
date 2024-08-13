// declaration of Variable for the vowels letter
/*All the code is well reserved with codewithtec
codewithtec@gmail.com
+231 886 225 499
+231 771 502 727 
*/


let vowel_1 = document.getElementById("vol-1");
let vowel_2 = document.getElementById("vol-2");
let vowel_3 = document.getElementById("vol-3");
let vowel_4 = document.getElementById("vol-4");
let vowel_5 = document.getElementById("vol-5");
let vowel_6 = document.getElementById("vol-6");
let vowel_7 = document.getElementById("vol-7");


// function that invoke the action of the variable 
let vowelFunction_1 = () =>{
    let audio_N1 = new Audio("assert/audio/A-Z/Cc.mp3");
    audio_N1.play();
}
vowel_1.addEventListener("click", vowelFunction_1);

let vowelFunction_2 = () =>{
    let audio_N2 = new Audio("assert/audio/A-Z/letterEe.mp3");
    audio_N2.play();
}
vowel_2.addEventListener("click", vowelFunction_2);

let vowelFunction_3 = () =>{
    let audio_N3 = new Audio("assert/audio/A-Z/letter-O.mp3");
    audio_N3.play();
}
vowel_3.addEventListener("click", vowelFunction_3);

let vowelFunction_4 = () =>{
    let audio_N4 = new Audio("assert/audio/A-Z/letter-A.mp3");
    audio_N4.play();
}
vowel_4.addEventListener("click", vowelFunction_4);

let vowelFunction_5 = () =>{
    let audio_N5 = new Audio("assert/audio/A-Z/letter-E.mp3");
    audio_N5.play();
}
vowel_5.addEventListener("click", vowelFunction_5);

let vowelFunction_6 = () =>{
    let audio_N6 = new Audio("assert/audio/A-Z/letter-I.mp3");
    audio_N6.play();
}
vowel_6.addEventListener("click", vowelFunction_6);

let vowelFunction_7 = () =>{
    let audio_N7 = new Audio("assert/audio/A-Z/letter-U.mp3");
    audio_N7.play();
}
vowel_7.addEventListener("click", vowelFunction_7);

