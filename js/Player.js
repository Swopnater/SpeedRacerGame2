class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
  getcount(){
    database.ref("playerCount").on("value",function(data){
      playerCount = data.val();
    })
  }
  updateCount(count){
    database.ref("/").update({
      playerCount: count
    })
  }
  addPlayer(){
    if (this.index==1){
      this.positionX = width /2-100
    }
    else{
      this.positionX = width /2+100
    }

    database.ref("players/player"+this.index).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
    })
  }
  
  getPlayersInfo(){
    database.ref("players").on("value",data=>{
      allplayers = data.val();
    })
  }
  update(){
    database.ref("players/player"+this.index).update({
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      score: this.score

    })
  }
  }

