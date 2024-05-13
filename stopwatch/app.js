var min_html = document.getElementById ("min")
var sec_html = document.getElementById ("seconds")
var ms_html = document.getElementById ("ms")
var start_btn = document.getElementById("start_btn")


var minute = 0
var seconds = 0
var milliSeconds = 0

var watchInterval;



function start() {
    watchInterval = setInterval(function(){
        milliSeconds++
        if(milliSeconds >= 99){
            seconds++
            milliSeconds = 0
        }
        if(seconds >= 59){
            minute++
            seconds = 0
        }
        ms_html.innerText = milliSeconds
        min_html.innerText = minute
        sec_html.innerText = seconds
        start_btn.disabled = true   
    },10)
    
}
function stop() {
    clearInterval(watchInterval)
    start_btn.disabled = false
}
function reset() {
    clearInterval(watchInterval)
    minute = 0
    seconds = 0
    milliSeconds = 0
    min_html.innerText = 0
    sec_html.innerText = 0
    ms_html.innerText = 0
    start_btn.disabled = false
    
}