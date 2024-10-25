class Rectangle {
    constructor(x, y, width, height, radius, background, line) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.background = background;
        this.line = line;

        this.draw = function () {
            ctx.save();

            ctx.beginPath();
            ctx.moveTo(this.x, this.y + this.radius);

            // Bottom left corner
            ctx.lineTo(this.x, this.y + this.height - this.radius);
            ctx.quadraticCurveTo(this.x, this.y + this.height, this.x + this.radius, this.y + this.height);

            // Bottom right corner
            ctx.lineTo(this.x + this.width - this.radius, this.y + this.height);
            ctx.quadraticCurveTo(this.x + this.width, this.y + this.height, this.x + this.width, this.y + this.height - this.radius);

            // Top right corner
            ctx.lineTo(this.x + this.width, this.y + this.radius);
            ctx.quadraticCurveTo(this.x + this.width, this.y, this.x + this.width - this.radius, this.y);

            // Top left corner
            ctx.lineTo(this.x + this.radius, this.y);
            ctx.quadraticCurveTo(this.x, this.y, this.x, this.y + this.radius);

            ctx.fillStyle = this.background;
            ctx.strokeStyle = this.line;
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        };
    }
}


// Detect canvas
window.onload = function(){
    canvas = document.getElementById('canvas');
    
    // Check if the canvas element exists and if the browser supports canvas
    if(canvas && canvas.getContext){
        ctx = canvas.getContext('2d');
        
        // Check if browser supports canvas in 2d
        if(ctx){
            let rectangle1 = new Rectangle(30, 30, 200, 120, 20, 'pink', 'blue');
            rectangle1.draw();

            let rectangle2 = new Rectangle(250, 30, 200, 120, 20, 'red', 'blue');
            rectangle2.draw();
            


        } else {
            alert("The browser doesn't support canvas");
        }
    }
} 