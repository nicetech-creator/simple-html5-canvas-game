if (untangleGame === undefined) {
    var untangleGame = {};
    } 
// Entry point
$(document).ready(function(){
    var canvas = document.getElementById("game");
    untangleGame.ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    untangleGame.createRandomCircles(width, height);
    untangleGame.connectCircles();
    untangleGame.handleInput();

    setInterval(gameloop, 30);
    
    function gameloop() {
        // clear the Canvas before redrawing.
        untangleGame.clear();
        untangleGame.drawAllLines();
        untangleGame.drawAllCircles();
    }
});