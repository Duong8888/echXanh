
var count = 0;
function next() {
    var span = document.getElementById('span');
    var ul = document.querySelector('.main');
    span.innerText = count;
    count++;
    if (count == 0) {
        ul.style.transform = 'translateX(0px)'
        span.innerText = count;
    } else if (count == 1) {
        ul.style.transform = 'translateX(-500px)'
        span.innerText = count;
    } else if (count == 2) {
        ul.style.transform = 'translateX(-1000px)'
        span.innerText = count;
    } else if (count == 3) {
        ul.style.transform = 'translateX(-1500px)'
        span.innerText = count;
    } else if (count == 4) {
        ul.style.transform = 'translateX(-2000px)'
        span.innerText = count;
    } else if (count == 5) {
        ul.style.transform = 'translateX(-2500px)'
        span.innerText = count;
    }
    if (count == 5) {
        count = -1;
    }
}

function back() {
    var span = document.getElementById('span');
    span.innerText = count;
    count--;

    if (count == 0) {
        ul.style.transform = 'translateX(0px)'
        span.innerText = count;
    } else if (count == 1) {
        ul.style.transform = 'translateX(-500px)'
        span.innerText = count;
    } else if (count == 2) {
        ul.style.transform = 'translateX(-1000px)'
        span.innerText = count;
    } else if (count == 3) {
        ul.style.transform = 'translateX(-1500px)'
        span.innerText = count;
    } else if (count == 4) {
        ul.style.transform = 'translateX(-2000px)'
        span.innerText = count;
    } else if (count == 5) {
        ul.style.transform = 'translateX(-2500px)'
        span.innerText = count;
    }
    if (count < 0) {
        count = 6;
    }
}setInterval('next()',2000);