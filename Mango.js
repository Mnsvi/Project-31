class Mango{

	constructor(x,y,r){	

		var options={
			isStatic : true,
			restitution : 0,
            friction : 1,
			}

        // defining positions
		this.x=x;
		this.y=y;
		this.r=r;

        // loading image
        this.image = loadImage("Plucking mangoes/mango.png");
        
        // creating body and adding it to world 
		this.body=Bodies.circle(x, y, this.r, options);
		World.add(world, this.body);
	}

	display()
	{
        // giivng nicknames
		var mangoPos=this.body.position;	
        // giving movements
		push();
		translate(mangoPos.x, mangoPos.y);
		rotate(this.body.angle);
        // giving color
		fill(255,0,255);
        // modes
		imageMode(CENTER);
		ellipseMode(CENTER);
        // displaying image
		image(this.image, 0,0,this.r*2, this.r*2);
		pop()
}
}