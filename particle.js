class Particle{
constructor(x,y,r){
    var options = {
        
        isStatic:false,
           restitution :1,
           friction :1,
           
    }
       this.x=x;
       this.y=y;
       this.r=r
       this.body = Bodies.circle(this.x,this.y,this.r,options);
       this.color = color(random(0,255),random(0,255),random(0,255));
       World.add(world,this.body);
}
display(){
    push()
        var pos = this.body.position;
        var angle = this.body.angle;
fill(this.color)
ellipse(this.body.position.x, this.body.position.y,this.r);
translate(pos.x, pos.y);
rotate(angle);
noStroke();
pop()
}
}