var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")
var lastpositionofx, lastpositionofy;
color = "red"
width = 1
var width1 = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300
if (width<992) {
    document.getElementById("mycanvas").width1 = new_width
    document.getElementById("mycanvas").height = new_height
    document.body.style.overflow = "hidden";
}


canvas.addEventListener("touchstart",touchstart);
function my_touchstart(e){
    color = document.getElementById("color").value
    width = document.getElementById("width").value;
    lastpositionofx = e.clientX - canvas.offsetLeft
    lastpositionofy = e.clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    currentpositionofmousex = e.clientX - canvas.offsetLeft
    currentpositionofmousey = e.clientY - canvas.offsetTop;
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width;

        ctx.moveTo(lastpositionofx, lastpositionofy)
        ctx.lineTo(currentpositionofmousex, currentpositionofmousey)
        ctx.stroke();
        console.log("lastx = "+lastpositionofx, "lasty = "+lastpositionofy)
        console.log("currentpositionofx = "+currentpositionofmousex, "currentpositionofy = "+currentpositionofmousey)
    lastpositionofx = currentpositionofmousex;
    lastpositionofy = currentpositionofmousey;
}

function cleararea(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height)
}
