let speech_1 = document.getElementById("speech_1");
let speech_2 = document.getElementById("speech_2");
let speech_3 = document.getElementById("speech_3");
let speech_4 = document.getElementById("speech_4");
let speech_5 = document.getElementById("speech_5");
let speech_6 = document.getElementById("speech_6");
let speech_7 = document.getElementById("speech_7");
let speech_8 = document.getElementById("speech_8");


// the function and execution of the play function
let speechFunction_1 = () => {
    let audio_a1 = new Audio("assert/audio/part_of_speech/Noun.mp3");
    audio_a1.play();
}
speech_1.addEventListener("click", speechFunction_1);

let speechFunction_2 = () => {
    let audio_a2 = new Audio("assert/audio/part_of_speech/Pronoun.mp3");
    audio_a2.play();
}
speech_2.addEventListener("click", speechFunction_2);

let speechFunction_3 = () => {
    let audio_a3 = new Audio("assert/audio/part_of_speech/Verb.mp3");
    audio_a3.play();
}
speech_3.addEventListener("click", speechFunction_3);

let speechFunction_4 = () => {
    let audio_a4 = new Audio("assert/audio/part_of_speech/Adverb.mp3");
    audio_a4.play();
}
speech_4.addEventListener("click", speechFunction_4);

let speechFunction_5 = () => {
    let audio_a5 = new Audio("assert/audio/part_of_speech/Adjective.mp3");
    audio_a5.play();
}
speech_5.addEventListener("click", speechFunction_5);

let speechFunction_6 = () => {
    let audio_a6 = new Audio("assert/audio/part_of_speech/Preposition.mp3");
    audio_a6.play();
}
speech_6.addEventListener("click", speechFunction_6);

let speechFunction_7 = () => {
    let audio_a7 = new Audio("assert/audio/part_of_speech/Conjunction.mp3");
    audio_a7.play();
}
speech_7.addEventListener("click", speechFunction_7);

let speechFunction_8 = () => {
    let audio_a8 = new Audio("assert/audio/part_of_speech/Interjection.mp3");
    audio_a8.play();
}
speech_8.addEventListener("click", speechFunction_8);