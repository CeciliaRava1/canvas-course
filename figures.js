// Detect canvas
window.onload = function(){
    canvas = document.getElementById('canvas');
    
    // Check if the canvas element exists and if the browser supports canvas
    if(canvas && canvas.getContext){
        ctx = canvas.getContext('2d');
        
        // Check if browser supports canvas in 2d
        if(ctx){
            // Create square 1
            ctx.fillStyle = 'yellow';
            ctx.strokeStyle = '#ff0065'; // Outline
            ctx.lineWidth = 5;
            ctx.fillRect(50, 50, 100, 100); // x, y, w, h  Draw figure
            ctx.strokeRect(50, 50, 100, 100); // Draw line

            // Create square 2
            ctx.fillStyle = 'green';
            ctx.fillRect(200, 50, 100, 100); // x, y, w, h  Draw figure
            ctx.strokeRect(200, 50, 100, 100); // Draw line

        } else {
            alert("The browser doesn't support canvas");
        }
    }
} 