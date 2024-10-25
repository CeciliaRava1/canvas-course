// Detect canvas
window.onload = function(){
    canvas = document.getElementById('canvas');
    
    // Check if the canvas element exists and if the browser supports canvas
    if(canvas && canvas.getContext){
        ctx = canvas.getContext('2d');
        
        // Check if browser supports canvas in 2d
        if(ctx){
            
            ctx.lineWidth = 10;
            ctx.strokeStyle = 'yellow';
            ctx.fillStyle = 'red';

            // arc
            ctx.beginPath();
            ctx.arc(100, 150, 50, 1.1 * Math.PI, 1.9 * Math.PI); // y, x, A,
            ctx.stroke();

            // arc
            ctx.beginPath();
            ctx.arc(250, 150, 50, 1.1 * Math.PI, 1.9 * Math.PI, true); // y, x, A, true: flip arc
            ctx.stroke();

            // arc
            ctx.beginPath();
            ctx.arc(400, 150, 50, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();


        } else {
            alert("The browser doesn't support canvas");
        }
    }
} 