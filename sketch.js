// string 
var name = "Sai Ruthvik Reddy"
console.log(name)

//number
var num = 24
console.log(num)

//boolean
var bool = true
console.log(bool)

var object;
console.log(object)

object = null
console.log(object)

arr1 = [1,2,3,4,5]
console.log(arr1[4])

arr2 = ["hello",356,false]
console.log(arr2)

arr2.push(null)
console.log(arr2)

arr2.pop();
console.log(arr2)
console.log(arr2.length)


arr3 = [[1,2],[3,4],[5,6]]
console.log(arr3[1][0])

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var gameState="onSling"

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var c_log
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    c_log=new Log(230,180,80,PI/2)
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 200);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(180,45);

    slingShot=new SlingShot(bird.body,{x:210,y:45})

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    c_log.display();

    bird.display();
    platform.display();
    slingShot.display();
    //strokeWeight(3);
    //line(bird.body.position.x,bird.body.position.y,c_log.body.position.x,c_log.body.position.y);

}
function mouseDragged(){
    if(gameState !== "launched"){
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
    
}
function mouseReleased(){
    slingShot.fly();
    gameState = "launched"
}
function keyPressed() {
    if (keyCode ===32 ) {
        //slingShot.attach(bird.body)
    }}