// Detect canvas
window.onload = function(){
    canvas = document.getElementById('canvas');
    
    // Check if the canvas element exists and if the browser supports canvas
    if(canvas && canvas.getContext){
        ctx = canvas.getContext('2d');
        
        // Check if browser supports canvas in 2d
        if(ctx){
            let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
            gradient.addColorStop(0, 'red');
            gradient.addColorStop(0.25, 'orange');
            gradient.addColorStop(0.35, 'yellow');
            gradient.addColorStop(0.55, 'green');
            gradient.addColorStop(0.75, 'blue');
            gradient.addColorStop(1, 'violet');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);


        } else {
            alert("The browser doesn't support canvas");
        }
    }
} 