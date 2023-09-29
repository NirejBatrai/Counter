let count = 0;

document.getElementById("decreaseBtn").onclick = function () {
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function () { // This is correct, "resetBtn" matches the HTML id
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function () {
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}
