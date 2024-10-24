// Detect canvas
window.onload = function(){
    canvas = document.getElementById('canvas');
    
    // Check if the canvas element exists and if the browser supports canvas
    if(canvas && canvas.getContext){
        ctx = canvas.getContext('2d');
        
        // Check if browser supports canvas in 2d
        if(ctx){
            // Create line 1
            ctx.lineWidth = 25;
            ctx.strokeStyle = 'yellow';
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(50, 50); // Where the line starts
            ctx.lineTo(450, 50); // Where the line ends
            ctx.stroke();

            // Create line 2
            ctx.strokeStyle = 'orange';
            ctx.lineCap = 'square';
            ctx.beginPath();
            ctx.moveTo(50, 100); 
            ctx.lineTo(450, 100); 
            ctx.stroke();

            // Create line 3
            ctx.strokeStyle = 'blue';
            ctx.lineCap = 'butt';
            ctx.beginPath();
            ctx.moveTo(50, 150); 
            ctx.lineTo(450, 150); 
            ctx.stroke();

        } else {
            alert("The browser doesn't support canvas");
        }
    }
} 