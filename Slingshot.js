class Slingshot{

    constructor(body, anchor){

        var options = {
            bodyA : body,
            pointB : anchor,
            stiffness : 0.004,
            length : 1
        }

        // body
        this.bodyA = body;
        this.pointB = anchor;

        // creating constraint
        this.slingshot = Constraint.create(options);

        // adding it to world
        World.add(world, this.slingshot);
    }
    
    // method
    attach(body){
            this.slingshot.bodyA = body;
        }

    // method
    fly(){
        this.slingshot.bodyA = null;
        }
    
display(){
    
    if(this.slingshot.bodyA){

    // giving nicknames
    var pointA = this.bodyA.position;
    var pointB = this.pointB;

    // stoke weight
    strokeWeight(2);
    
    // creating lines 
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}
}