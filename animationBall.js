const game = {

    ctx: null, 
    canvas: null,
    radius: 30,
    ballpositionX: 0,
    ballpositionY: 400,
    ballColor: 'red',
    distanceX: 10, // Speed of the ball, to the right
    distanceY: -10,
    rightLimit: 0,
    leftLimit: 0,
    bottomLimit: 0,
    topLimit: 0,

}

// Detect canvas
window.onload = function(){

    game.canvas = document.getElementById('canvas');
    
    // Check if the canvas element exists and if the browser supports canvas
    if(game.canvas && game.canvas.getContext){
        game.ctx = canvas.getContext('2d');
        
        // Check if browser supports canvas in 2d
        if(game.ctx){
            
            start();
            move(); // Create movement effect
            setInterval(move, 60); // Update every 60 miliseconds

        } else {
            alert("The browser doesn't support canvas");
        }
    }
} 


const start = () => {
    
    game.ctx.lineWidth = game.radius;
    game.ctx.fillStyle = game.ballColor;

    game.rightLimit = game.canvas.width - game.radius;
    game.leftLimit = game.radius;

    game.bottomLimit = game.canvas.height - game.radius;
    game.topLimit = game.radius;

}


const move = () => {
    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height); // x, y, width, height
    verifyLimits();

    // The ball moves in the x axis
    game.ballpositionX += game.distanceX; // value = += 4
    
    // The ball moves in the y axis
    game.ballpositionY += game.distanceY;
    game.ctx.beginPath();
    game.ctx.arc(game.ballpositionX, game.ballpositionY, game.radius, 0, 2 * Math.PI, true);
    game.ctx.fill();

}

const verifyLimits = () => {

    let nBallX = game.ballpositionX + game.distanceX;
    let nBallY = game.ballpositionY + game.distanceY;

    if(nBallX > game.rightLimit){
        game.distanceX *= - 1; // Multiply game.distanceX * game.distanceX and subtract 1
        nBallX = game.rightLimit; // Set default value to positionBallX
    
    }

    if(nBallX < game.leftLimit){
        game.distanceX *= - 1; // Multiply game.distanceX * game.distanceX and subtract 1
        nBallX = game.leftLimit; // Set default value to positionBallX
    
    }

    if(nBallY > game.bottomLimit){
        game.distanceY *= - 1; // Multiply game.distanceX and subtract 1
        nBallY = game.bottomLimit; // Set default value to positionBallX
    
    }

    if(nBallY < game.topLimit){
        game.distanceY *= - 1; // Multiply game.distanceX and subtract 1
        nBallY = game.topLimit; // Set default value to positionBallX
    
    }

    game.ballpositionX = nBallX;
    game.ballpositionY = nBallY;

}