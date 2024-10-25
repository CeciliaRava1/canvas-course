// Detect canvas
window.onload = function(){
    canvas = document.getElementById('canvas');
    
    // Check if the canvas element exists and if the browser supports canvas
    if(canvas && canvas.getContext){
        ctx = canvas.getContext('2d');
        
        // Check if browser supports canvas in 2d
        if(ctx){
            
            // Center
            let centerX = canvas.width/2;
            let centerY = canvas.height/2;

            // Radii of the circles
            let externalRadius = 95;
            let internalRadius = 50;
            let averageRadius = internalRadius * 1.6;

            // Amount of points
            let amountOfPoints = 40;

            ctx.beginPath();
            ctx.lineJoin = 'bevel';
            
            for(let i = 0; i < amountOfPoints; i++){
                let radius = null;

                if(i % 2 == 0){
                    radius = externalRadius;
                } else {
                    radius = internalRadius;
                }

                let angle = Math.PI * 2 / amountOfPoints * (i+1);

                // Calculate external coordinates
                let x = (radius * Math.sin(angle)) + centerX;
                let y = (radius * Math.cos(angle)) + centerY;

                // Draw the line
                if(i == 0){
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }

            ctx.closePath();

            ctx.lineWidth = 5;
            ctx.strokeStyle = 'black';
            ctx.fillStyle = 'white';
            ctx.stroke();


        } else {
            alert("The browser doesn't support canvas");
        }
    }
} 