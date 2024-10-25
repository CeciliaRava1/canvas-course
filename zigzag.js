// Detect canvas
window.onload = function(){
    canvas = document.getElementById('canvas');
    
    // Check if the canvas element exists and if the browser supports canvas
    if(canvas && canvas.getContext){
        ctx = canvas.getContext('2d');
        
        // Check if browser supports canvas in 2d
        if(ctx){
            
            let initx = 85;
            let inity = 70;
            let displacement = 30;
            let amountOfLines = 15;

            ctx.lineWidth = 10;
            ctx.strokeStyle = 'black';
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round'; 
            ctx.beginPath();
            ctx.moveTo(initx, inity);

            for(let i = 0; i < amountOfLines; i++){
                let x = initx + ((i+1)*displacement);
                let y = inity;

                if(i % 2 == 0){
                    y = inity + 100;
                }
                ctx.lineTo(x, y);
            }

            ctx.stroke();



        } else {
            alert("The browser doesn't support canvas");
        }
    }
} 