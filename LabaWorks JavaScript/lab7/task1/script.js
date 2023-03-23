const btn = document.querySelector(".btn"),
start = document.querySelector(".start"),
stopwatch = document.querySelector(".stopwatch")
let timerId = null
function interval() {
    stopwatch.innerHTML -= 1
    if (stopwatch.innerHTML <= 0) {
        clearInterval(timerId)
    }
}
function time() {
    clearInterval(timerId)
    if (start.value > 0) {
        stopwatch.innerHTML = start.value
        timerId = setInterval(interval,1000)
    }
}
btn.addEventListener("click",time)
