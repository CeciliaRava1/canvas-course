// Detect canvas
window.onload = function(){
    canvas = document.getElementById('canvas');
    
    // Check if the canvas element exists and if the browser supports canvas
    if(canvas && canvas.getContext){
        ctx = canvas.getContext('2d');
        
        // Check if browser supports canvas in 2d
        if(ctx){
            
            let radius = 0, angle = 0;

            ctx.lineWidth = 10;
            ctx.strokeStyle = 'orange';
            ctx.beginPath();
            ctx.moveTo(canvas.width/2, canvas.height/2);

            for(let i = 0; i < 200; i++){
                radius += 0.75;
                angle += (Math.PI * 2)/50;
                let x = canvas.width/2 + radius * Math.cos(angle); // Spiral effect in each round
                let y = canvas.height/2 + radius * Math.sin(angle);
                ctx.lineTo(x, y);
            }

            ctx.stroke();



        } else {
            alert("The browser doesn't support canvas");
        }
    }
} 