// Detect canvas
window.onload = function(){
    canvas = document.getElementById('canvas');
    
    // Check if the canvas element exists and if the browser supports canvas
    if(canvas && canvas.getContext){
        ctx = canvas.getContext('2d');
        
        // Check if browser supports canvas in 2d
        if(ctx){
            
            let ball = new Image();
            ball.src = '/img/ball1.png'
            
            ball.onload = function(e){
                let pattern = ctx.createPattern(ball, 'repeat');
                ctx.fillStyle = pattern;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
            }

        } else {
            alert("The browser doesn't support canvas");
        }
    }
} 