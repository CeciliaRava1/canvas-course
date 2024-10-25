// Detect canvas
window.onload = function(){
    canvas = document.getElementById('canvas');
    
    // Check if the canvas element exists and if the browser supports canvas
    if(canvas && canvas.getContext){
        ctx = canvas.getContext('2d');
        
        // Check if browser supports canvas in 2d
        if(ctx){
            
            ctx.font = '8em Verdana';
            ctx.lineWidth = 1.0;
            ctx.fillStyle = 'blue';
            ctx.strokeStyle = 'yellow';

            // Shadows
            ctx.shadowColor = 'black';
            ctx.shadowOffsetX = 5;
            ctx.shadowOffsetY = 5;
            ctx.shadowBlur = 10;

            ctx.fillText('Canvas', 35, 150);
            ctx.strokeText('Canvas', 35, 150);
            ctx.fillRect(35, 150, 10, 10);


        } else {
            alert("The browser doesn't support canvas");
        }
    }
} 