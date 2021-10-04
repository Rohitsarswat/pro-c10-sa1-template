var sprite1, sprite2 ;
var sprites = []
function setup() 
{
  createCanvas(400,400);
  sprite1 = createSprite(100,100,10,10)
  sprite2 = createSprite(200,200,10,10)
  sprites = [sprite1, sprite2]
  console.log(sprites[0].position.x)
  console.log(sprites[0].position.y)
  console.log(sprites[1].position.x)
  console.log(sprites[1].position.y)
}

function draw() 
{
background(51);
drawSprites()
}

