class Tree{

    constructor(x,y){

        var options = {
            isStatic : true
        }
        
        // dimension 
        this.tree = Bodies.rectangle(x, y, options);
        
        // loading image
        this.image = loadImage("Plucking mangoes/tree.png");
    }

display(){

    // image
    imageMode(CENTER);

    // giving nicknames
    var pos1 = this.tree.position.x;
    var pos2 = this.tree.position.y;

    // dispalying imgae
    image(this.image, pos1, pos2, 600, 600);
}
}