
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var drops;


function preload(){
    
}

function setup(){
    createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);


    drops=new Drops(200,200,10,10);



   
    
}

function draw(){
    background(0);

    drops.display;
}   

