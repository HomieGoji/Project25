class Paper{
    constructor(x, y,r){
        var options={
             isStatic:false,
              restitution:0.3,
               friction:0.5,
                density:1.2 
        }
        this.body=Bodies.circle(x,y,r,options)
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("paper.png")
        World.add(world,this.body)
    }
    display(){
        var paperpos=this.body.position
        push()
         translate(paperpos.x, paperpos.y);
          ellipseMode(RADIUS)
           strokeWeight(3);
            fill(255)
            imageMode(RADIUS);
            image(this.image,0,0,this.r,this.r)
            // ellipse(0,0,this.r, this.r);
              pop()
    }
}