var width = document.getElementById('container-content').width;

var button = document.getElementById('scroll');
button.onclick = function () {
    var container = document.getElementById('container');
    sideScroll(container, 'right', 10, width, 10);
};

var back = document.getElementById('back');
back.onclick = function () {
    var container = document.getElementById('container');
    sideScroll(container, 'left', 10, width, 10);
};

function sideScroll(element, direction, speed, distance, step) {
    scrollAmount = 0;
    var slideTimer = setInterval(function () {
        if (direction == 'left') {
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
        }
    }, speed)
}

var drop = document.getElementById('hamburger')

drop.onClick = function () {
    var x = document.getElementById('menud')
    if (x.style.display === 'none') {
        x.style.display = 'block'
    }
    else {
        display = 'none';
    }
}

