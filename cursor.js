var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', displayMouse);

function displayMouse (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
}