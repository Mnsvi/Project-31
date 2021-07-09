class Stone
{
	constructor(x,y,r)
	{
		var options = {
			isStatic : false,
			restitution : 0,
			friction : 1,
			density : 1.2
			}
            
        // giving values
		this.x = x;
		this.y = y;
		this.r = r;

        // loading image
		this.image = loadImage("Plucking mangoes/stone.png");

        // giving dimesnion
		this.body = Bodies.circle(this.x, this.y, this.r/2, options)
		
        // adding it to world 
        World.add(world, this.body);
	}
    
	display()
	{ 
        // giving nicknames
        var stonePos = this.body.position;	
        // giving movements 
		push()
		translate(stonePos.x, stonePos.y);
		rotate(this.body.angle)
        // color
		fill(255,0,255)
        // modes
		imageMode(CENTER);
		ellipseMode(CENTER);
        // displaying image
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
}
}