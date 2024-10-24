// Detect canvas
window.onload = function(){
    canvas = document.getElementById('canvas');
    
    // Check if the canvas element exists and if the browser supports canvas
    if(canvas && canvas.getContext){
        ctx = canvas.getContext('2d');
        
        // Check if browser supports canvas in 2d
        if(ctx){
            // Styles
            ctx.lineWidth = 10;
            ctx.strokeStyle = 'yellow';
            ctx.fillStyle = 'blue';

            // Path
            ctx.beginPath();
            ctx.moveTo(50, 100);
            ctx.lineTo(100, 50);
            ctx.lineTo(150, 100);
            ctx.lineTo(100, 150);
            ctx.stroke();

            // Path
            ctx.beginPath();
            ctx.moveTo(200, 100);
            ctx.lineTo(250, 50);
            ctx.lineTo(300, 100);
            ctx.lineTo(250, 150);
            ctx.closePath();
            ctx.stroke();

            // Path
            ctx.beginPath();
            ctx.moveTo(350, 100);
            ctx.lineTo(400, 50);
            ctx.lineTo(450, 100);
            ctx.lineTo(400, 150);
            ctx.fill();
            ctx.closePath();
            ctx.stroke();

        } else {
            alert("The browser doesn't support canvas");
        }
    }
} 