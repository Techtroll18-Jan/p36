var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood,lastfed;
var foodObj,feed;

//create feed and lastFed variable here


function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //create feed the dog button here

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();

  //write code to read fedtime value from the database 
  if(lastfed>=12){
    
  }
  //write code to display text lastFed time here
  else if (lastfed==0){
    text("last feed : 12 AM",350,30);
  }else{

  }

 
  

 
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);

  //write code here to update food stock and last fed time
  var food_stock_val=foodobj.getFoodStock();
  if(food_stock_val <=0){
    foodobj.updateFoodStock(food_stock_val*0);
  }
  else{
    foodobj.updateFoodStock(food_stocl_val-1);
  }
}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
