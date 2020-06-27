function getNumber(num) {
    var screenResult = document.getElementById("output");
    screenResult.value += num;
}
function clearBtn() {
    var screenResult = document.getElementById("output");
    screenResult.value = "";
}
function getAnswer() {
    var screenResult = document.getElementById("output");
    screenResult.value = eval(screenResult.value);
}
function Erase() {
    var screenResult = document.getElementById("output");
    screenResult.value = screenResult.value.slice(0,-1);
}
