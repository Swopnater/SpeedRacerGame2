class Game {
  constructor() {}
  getState(){
    database.ref("gameState").on("value",function(data){
      gameState = data.val();
    })
    
  }
  update(state){
    database.ref("/").update({
      gameState: state
    })
  }

  start() {
    form = new Form();
    form.display();
    player = new Player();
    player.getcount();

    car1 = createSprite(width/2-50, height-100)
    car1.addImage(car1Img)
    car1.scale = 0.07

    car2 = createSprite (width/2+100 , height-100)
    car2.addImage(car2Img)
    car2.scale = 0.07

    cars=[car1,car2]
  }

  play(){
    this.handleElements();
    player.getPlayerInfo();
    if(allplayers!==undifined){
      image(track,0,-height*5,width,hight*6);
      var index = 0;
      for(var plr in allplayers){
        index = index+1;
        var x = allPlayers[plr].positionX;
        var y = height-allPlayers[plr].positionY

        cars[index-1].position.x = x
        cars[index-1].position.y = y

        if (index==player.index){
          stroke(10)
          fill ("red")
          ellipse(x,y,60,60)
          camara.position.x = cars[index-1].position.x
          camara.position.y = cars[index-1].position.y
          }

        }
        this.handlePlayerControls();
        drawSprites();

    }
    
  }
handlePlayerControls(){
  if(keyIsDown(UP_ARROW)){
    player.positionY += 10;
    player.update();
  }
}
  handleElements(){
    form.hide();
    form.titleImg.position(40,50);
    form.titleImg.class("gameTitleAfterEffect");
  }
}
