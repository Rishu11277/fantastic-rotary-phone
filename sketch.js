var engine, world, ball, groundObject, leftSide, rightSide, render, ballOptions;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render

function preload() {

}

function setup() {
    createCanvas(800, 700);

    engine = Engine.create();
    world = engine.world;
    render = Render.create({
        engine: engine,
        element: document.body,
        options: {
            width: width,
            height: height
        }
    })

    ballOptions = {
        restitution: 0.3,
        density: 1.2
    }




    Render.run(render)



    ellipseMode(RADIUS)

    ball = Matter.Bodies.circle(100, 100, 20, ballOptions)
    World.add(world, ball)
    console.log(ball)

    groundObject = new Ground(400, 680, 800, 20)
    leftSide = new Ground(600, 615, 20, 110)
    rightSide = new Ground(700, 615, 20, 110)


    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background(rgb(41, 98, 255));
    //ellipseMode(RADIUS)
    fill("")
    ellipse(ball.position.x, ball.position.y, 20, 20)
    stroke(rgb(41, 98, 255))
    fill("green")
    groundObject.display()
    fill("orange")
    leftSide.display()
    rightSide.display()
    drawSprites();
}

function keyPressed() {
        if (keyCode == UP_ARROW && ball.position.x < 600) {
            Matter.Body.applyForce(ball, ball.position, { x: 40, y: -30 })
        }
    
}



