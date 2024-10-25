// Detect canvas
window.onload = function(){
    canvas = document.getElementById('canvas');
    
    // Check if the canvas element exists and if the browser supports canvas
    if(canvas && canvas.getContext){
        ctx = canvas.getContext('2d');
        
        // Check if browser supports canvas in 2d
        if(ctx){
            
            let image = new Image();
            image.src = '/img/cat.jpg'

            image.onload = function(e){
                processImage();
            }

            function processImage(){
                ctx.drawImage(image, 10, 10);
            }

        } else {
            alert("The browser doesn't support canvas");
        }
    }
} 