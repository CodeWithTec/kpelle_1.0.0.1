// defining the variable of usage 

let month_1 = document.getElementById("month-1");
let month_2 = document.getElementById("month-2");
let month_3 = document.getElementById("month-3");
let month_4 = document.getElementById("month-4");
let month_5 = document.getElementById("month-5");
let month_6 = document.getElementById("month-6");
let month_7 = document.getElementById("month-7");
let month_8 = document.getElementById("month-8");
let month_9 = document.getElementById("month-9");
let month_10 = document.getElementById("month-10");
let month_11 = document.getElementById("month-11");
let month_12 = document.getElementById("month-12");


// The day of the week 
let day_1 = document.getElementById("day-1");
let day_2 = document.getElementById("day-2");
let day_3 = document.getElementById("day-3");
let day_4 = document.getElementById("day-4");
let day_5 = document.getElementById("day-5");
let day_6 = document.getElementById("day-6");
let day_7 = document.getElementById("day-7");
// defining the variable of usage



// using the variable in function Month

let monthFunction_1 = () =>{
    let mAudio_1 = new Audio("assert/audio/Months/January.mp3");
    mAudio_1.play();
}
month_1.addEventListener("click", monthFunction_1);

let monthFunction_2 = () => {
    let mAudio_2 = new Audio("assert/audio/Months/February.mp3");
    mAudio_2.play();
}
month_2.addEventListener("click", monthFunction_2);

let monthFunction_3 = () => {
    let mAudio_3 = new Audio("assert/audio/Months/March.mp3");
    mAudio_3.play();
}
month_3.addEventListener("click", monthFunction_3);

let monthFunction_4 = () => {
    let mAudio_4 = new Audio("assert/audio/Months/April.mp3");
    mAudio_4.play();
}
month_4.addEventListener("click", monthFunction_4);

let monthFunction_5 = () => {
    let mAudio_5 = new Audio("assert/audio/Months/May.mp3");
    mAudio_5.play();
}
month_5.addEventListener("click", monthFunction_5);

let monthFunction_6 = () => {
    let mAudio_6 = new Audio("assert/audio/Months/June.mp3");
    mAudio_6.play();
}
month_6.addEventListener("click", monthFunction_6);

let monthFunction_7 = () => {
    let mAudio_7 = new Audio("assert/audio/Months/July.mp3");
    mAudio_7.play();
}
month_7.addEventListener("click", monthFunction_7);

let monthFunction_8 = () => {
    let mAudio_8 = new Audio("assert/audio/Months/August.mp3");
    mAudio_8.play();
}
month_8.addEventListener("click", monthFunction_8);

let monthFunction_9 = () => {
    let mAudio_9 = new Audio("assert/audio/Months/September.mp3");
    mAudio_9.play();
}
month_9.addEventListener("click", monthFunction_9);

let monthFunction_10 = () => {
    let mAudio_10 = new Audio("assert/audio/Months/October.mp3");
    mAudio_10.play();
}
month_10.addEventListener("click", monthFunction_10);

let monthFunction_11 = () => {
    let mAudio_11 = new Audio("assert/audio/Months/November.mp3");
    mAudio_11.play();
}
month_11.addEventListener("click", monthFunction_11);

let monthFunction_12 = () => {
    let mAudio_12 = new Audio("assert/audio/Months/December.mp3");
    mAudio_12.play();
}
month_12.addEventListener("click", monthFunction_12);


// The days of the week function in months
let dayFunction_1 = () => {
    let mAudio_1 = new Audio("assert/audio/Days/Sunday.mp3");
    mAudio_1.play();
}
day_1.addEventListener("click", dayFunction_1);

let dayFunction_2 = () => {
    let mAudio_2 = new Audio("assert/audio/Days/Monday.mp3");
    mAudio_2.play();
}
day_2.addEventListener("click", dayFunction_2);

let dayFunction_3 = () => {
    let mAudio_3 = new Audio("assert/audio/Days/Tuesday.mp3");
    mAudio_3.play();
}
day_3.addEventListener("click", dayFunction_3);


let dayFunction_4 = () => {
    let mAudio_4 = new Audio("assert/audio/Days/Wednesday.mp3");
    mAudio_4.play();
}
day_4.addEventListener("click", dayFunction_4);

let dayFunction_5 = () => {
    let mAudio_5 = new Audio("assert/audio/Days/Thursday.mp3");
    mAudio_5.play();
}
day_5.addEventListener("click", dayFunction_5);

let dayFunction_6 = () => {
    let mAudio_6 = new Audio("assert/audio/Days/Friday.mp3");
    mAudio_6.play();
}
day_6.addEventListener("click", dayFunction_6);

let dayFunction_7 = () => {
    let mAudio_7 = new Audio("assert/audio/Days/Saturday.mp3");
    mAudio_7.play();
}
day_7.addEventListener("click", dayFunction_7);