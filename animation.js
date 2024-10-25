const game = {

    ctx: null, 
    canvas: null,
    radius: 10,
    ballpositionX: 0,
    ballpositionY: 400,
    ballColor: 'red',
    distanceX: 6, // Speed of the ball, to the right
    distanceY: -6,

}

// Detect canvas
window.onload = function(){

    game.canvas = document.getElementById('canvas');
    
    // Check if the canvas element exists and if the browser supports canvas
    if(game.canvas && game.canvas.getContext){
        game.ctx = canvas.getContext('2d');
        
        // Check if browser supports canvas in 2d
        if(game.ctx){
            
            game.ctx.lineWidth = game.radius;
            game.ctx.fillStyle = game.ballColor;
            move(); // Create movement effect
            setInterval(move, 60); // Update every 60 miliseconds

        } else {
            alert("The browser doesn't support canvas");
        }
    }
} 

const move = () => {
    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height); // x, y, width, height
    
    // The ball moves in the x axis
    game.ballpositionX += game.distanceX; // value = += 4
    
    // The ball moves in the y axis
    game.ballpositionY += game.distanceY;
    game.ctx.beginPath();
    game.ctx.arc(game.ballpositionX, game.ballpositionY, game.radius, 0, 2 * Math.PI, true);
    game.ctx.fill();

}