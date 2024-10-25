// Detect canvas
window.onload = function(){
    canvas = document.getElementById('canvas');
    
    // Check if the canvas element exists and if the browser supports canvas
    if(canvas && canvas.getContext){
        ctx = canvas.getContext('2d');
        
        // Check if browser supports canvas in 2d
        if(ctx){
            
            let amountOfPoints = 10;
            let vertices = amountOfPoints * 2;
            let angle = Math.PI * 2 / vertices;
            let internalRadius = 40;
            let externalRadius = 80;
            let xx = canvas.width / 2;
            let yy = canvas.height / 2;
            ctx.strokeStyle = 'red';
            ctx.fillStyle = 'yellow';
            ctx.lineWidth = 6;
            ctx.beginPath();

            for(let i = 0; i < vertices; i ++){
                let x, y;

                if(i % 2 == 0){
                    x = Math.cos(angle * i) * externalRadius;
                    y = Math.sin(angle * i) * externalRadius;
                } else {
                    x = Math.cos(angle * i) * internalRadius;
                    y = Math.sin(angle * i) * internalRadius;
                }

                ctx.lineTo(xx + x, yy + y);
            }
            
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

        } else {
            alert("The browser doesn't support canvas");
        }
    }
} 