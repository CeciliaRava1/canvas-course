let canvas, ctx, image;
let fileSelect;

// Detect canvas
window.onload = function(){

    fileSelect = document.getElementById('file');
    canvas = document.getElementById('canvas');
    
    // Check if the canvas element exists and if the browser supports canvas
    if(canvas && canvas.getContext){
        ctx = canvas.getContext('2d');
        
        // Check if browser supports canvas in 2d
        if(ctx){
            
            fileSelect.onchange = function(e){
                if(fileSelect.value != ''){
                    image.src = fileSelect.value;
                    image.onload = function (e){
                        processImage();
                        
                    }
                }
            }

            // function processImage(){
            //     cleanSelectValue();
            //     ctx.drawImage(image, 10, 10); // image, x, y

            // }

            function processImage() {
                cleanSelectValue();
            
                // Calculate scale
                const canvasWidth = canvas.width;
                const canvasHeight = canvas.height;
            
                // Image proportions
                const imgWidth = image.width;
                const imgHeight = image.height;
            
                // Calculate new scale
                const scale = Math.min(canvasWidth / imgWidth, canvasHeight / imgHeight);
                const newWidth = imgWidth * scale;
                const newHeight = imgHeight * scale;
            
                // Calculate center position
                const x = (canvasWidth - newWidth) / 2;
                const y = (canvasHeight - newHeight) / 2;
            
                ctx.drawImage(image, x, y, newWidth, newHeight);
                
            }


            function cleanSelectValue(){
                ctx.clearRect(0, 0, image.width, image.height); // Clean the image
            
            }

            image = new Image();
            image.src = 'img/whiteCat.jpg';
            image.onload = function(e){
                processImage();
            }


        } else {
            alert("The browser doesn't support canvas");
        }
    }
} 