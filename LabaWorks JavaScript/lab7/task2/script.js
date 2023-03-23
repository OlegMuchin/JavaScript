let input = document.createElement("input"),
h2 = document.createElement("h2"),
timeoutID = null
document.body.append(input)
document.body.append(h2)
function main() {
    input.disabled = true
    clearTimeout(timeoutID)
    timeoutID = setTimeout(output, 300)
    input.disabled = false
}
function output() {
    h2.innerHTML = input.value
}
input.addEventListener("input", main)