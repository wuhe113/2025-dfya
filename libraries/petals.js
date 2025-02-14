// Cherry Blossoms
// the following code is learned from https://editor.p5js.org/abrock/sketches/SyyaEusom, posted by abrock, title as CherryBlossoms

// class petal {
//     constructor() {
//         // Initialize coordinates
//         this.posX = 0;
//         this.posY = random(-50, 0);
//         this.initialAngle = random(10, 0 * PI);
//         this.size = random(5, 10);
        
//         // Define movement radius
//         this.radius = sqrt(random(pow(width / 1, 2)));
//       }
    
//       update(time) {
//         // x position follows a circle
//         let w = 0.1; // Angular speed
//         let angle = w * time + this.initialAngle;
//         this.posX = width / 1 + this.radius * tan(angle); // Calculates tangent of the angle the petals fall
//         this.posY += pow(this.size, 0.5);
    
//         // Delete petal if past end of screen
//         if (this.posY > height) {
//           let index = petals.indexOf(this);
//           if (index !== -1) {
//             petals.splice(index, 1);
//           }
//         }
//       }
    
//       display() {
//         ellipse(this.posX, this.posY, this.size);
//       }
//     }


class petal {
    constructor(ctx) {
        this.ctx = ctx;
        this.posX = 0;
        this.posY = ctx.random(-50, 0);
        this.initialAngle = ctx.random(10, 0 * ctx.PI);
        this.size = ctx.random(8, 15);
        this.radius = ctx.sqrt(ctx.random(ctx.pow(ctx.width / 1, 2))); // Movement radius
        this.rotation = 0;
        this.color = ctx.color(ctx.random(200, 239));
    }

    update(time) {
        let w = 0.1;
        let angle = w * time + this.initialAngle;
        this.posX = this.ctx.width / 1 + this.radius * this.ctx.tan(angle); // Movement pattern
        this.posY += this.ctx.pow(this.size, 0.5);


        this.rotation += this.ctx.radians(5);
    }

    display(ctx) {
        ctx.push();
        ctx.translate(this.posX, this.posY);
        ctx.rotate(this.rotation); 
        ctx.fill(this.color);
        ctx.stroke(26, 26, 26, 100);
        ctx.strokeWeight(1.5);
        // ctx.noStroke();
        ctx.ellipse(0, 0, this.size * 1.2, this.size * 0.8, 5);

        ctx.pop(); 
    }
}