class Bob {
    constructor(x, y) {
      var options = {
          'isStatic' : false,
          'restitution':0.3,
          'friction': 0,
           'density': 1.2
            
      }
      this.radius  = 50;
      this.body = Bodies.circle(x, y,this.radius, options);
      
      
      World.add(world, this.body);
    }
    display()
    {
      var pos = this.body.position;
      ellipseMode(RADIUS);
      fill("orange");
      ellipse(pos.x,pos.y, this.radius,this.radius);
     
      
    }
  }
