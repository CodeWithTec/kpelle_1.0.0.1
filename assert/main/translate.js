// Define the Variable of the Translator 

let demoInput = document.getElementById("input_line");
let timeTranslate = document.getElementById("trans");

// The obj of the translator 
// Considering the function and Trocker 

function translate_1(){
    const obj = {
       "":"You didn't enter a Word",
       "leaf":"Láa",
       "chicken":"Tέԑ",
       "orange":"Gamέnԑ",
       "tread":"Yèe"
       
    }

    document.getElementById("output").innerHTML = obj[demoInput.value.toLowerCase()] ?? "Your Search is Not Available.";
    document.getElementById("short").innerHTML = "<small><i>en/kpelle:codewithtec</i></small>";
    if(demoInput.value.toLowerCase() == "leaf"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Leaf is a name given to a part fo the plant that allow it to take in oxygen.";
    }else if(demoInput.value.toLowerCase() == ""){
        document.getElementById("comment").innerHTML = "Please Enter a Word!";
    }else if(demoInput.value.toLowerCase() == "thicken"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Name of a Domestic Animal we fine in our surrounding and home.";
    }else if(demoInput.value.toLowerCase() == "trange"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Name of a Fruit we fine in our market places, surrounding and home.";
    }else if(demoInput.value.toLowerCase() == "tread"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A Tread is a material used in sewing cloth together. It is mostly found in the Tailor shop.";
    }
}

timeTranslate.addEventListener("click", translate_1);