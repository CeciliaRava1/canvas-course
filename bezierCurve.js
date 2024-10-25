// Detect canvas
window.onload = function(){
    canvas = document.getElementById('canvas');
    
    // Check if the canvas element exists and if the browser supports canvas
    if(canvas && canvas.getContext){
        ctx = canvas.getContext('2d');
        
        // Check if browser supports canvas in 2d
        if(ctx){
            
            ctx.lineWidth = 10;
            ctx.strokeSyle = 'yellow';
            ctx.beginPath();
            
            // Bezier curve
            // let x1 = 20, y1 = 20;
            // ctx.moveTo(x1, y1);
            // ctx.quadraticCurveTo(20, 100, 200, 20); // (start) cpx, cpy, (end) x, y
            // ctx.stroke();

            ctx.moveTo(20, 20);
            ctx.bezierCurveTo(20, 100, 400, 100, 200, 300); // (first control point) cp1x, cp1y, (second control point) cp2x, cp2y, (end) x, y
            ctx.stroke();



        } else {
            alert("The browser doesn't support canvas");
        }
    }
} 