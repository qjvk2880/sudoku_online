var h1 = document.getElementsByTagName('h1')[0];
var hrs_input = document.getElementById('hrs');
var min_input = document.getElementById('min');
var sec_input = document.getElementById('sec');
var sec = 0;
var min = 0;
var hrs = 0;
var t;

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}
function add() {
    tick();
    h1.textContent = (hrs > 9 ? hrs : "0" + hrs) 
        	 + ":" + (min > 9 ? min : "0" + min)
        + ":" + (sec > 9 ? sec : "0" + sec);
    hrs_input.value = hrs;
    min_input.value = min;
    sec_input.value = sec;
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

timer();
