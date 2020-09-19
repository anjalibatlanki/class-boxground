class Box {

    constructor(x,y,width,height) {

        var options = {

            'restitution': 1, 
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }



    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        push(); //captures the new setting
        translate(pos.x,pos.y); //change the 0 of the axis to the given x and y
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height);
        pop(); //revert to the old setting


    }
}