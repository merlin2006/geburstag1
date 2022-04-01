var body = document.querySelector("body");
var lever = document.getElementById("lever");
var light = document.getElementById("light");

var audio = document.getElementById("musik");
var horn = document.getElementById("tröte");
var count = 0;
var count2 = 0;

function dark(){
    body.classList.toggle("dark");
    lever.classList.toggle("on");
    light.classList.toggle("an");

    if(count ==0){
        count = 1;
        audio.play();
    }else{
        count = 0;
        audio.pause();
    }
    
}
function tröte(){
    if(count2 ==0){
        count2= 1;
        horn.play();
    }else{
        count2 = 0;
        audio.pause();
    }
}