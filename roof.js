class Roof{
    constructor(x,y,width,height){
var options = {
    isStatic : false
}
this.roof = Bodies.rectangle(x,y,width,height,options);
this.width = 500;
this.height = 60;
World.add(world,this.roof);
    }
    display(){
        rectMode(CENTER);
        
        rect(400,50,500,60);
    }
}