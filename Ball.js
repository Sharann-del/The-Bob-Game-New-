class Ball{
    constructor(x, y, radius){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':0.2
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;
        this.image = loadImage("ball.png");
        this.scale = 0.5;
        World.add(world, this.body);
    }
    display(){
        push();
        //translate(this.body.position.x, this.body.position.y);
        //ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y);
        pop();
    }
}