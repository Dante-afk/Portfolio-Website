let canvas = document.getElementById("my_canvas");
let context = canvas.getContext("2d");

const speed = 3;
let position = 0;
let movespeed = 40;

function moveball() {
    if(position + radius > 600) {
        movespeed = -speed;
    } else if(position - radius < 0) {
        movespeed = speed;
    }
    position += movespeed;
}

function drawball() {
    context.clearRect(0, 0, 600, 400);

    context.fillStyle = "#62687f";
    context.beginPath();
    context.arac(position, 50, radius, 0, 2 * Math.PI);
    context.fill();
}

function animate() {
    moveball();
    drawball();
    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate); //to start the animation function being called