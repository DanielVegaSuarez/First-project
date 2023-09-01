function Player(x, y) {
  let self = this;
  this.x = x;
  this.y = y;
  this.sprite;
  this.isJumping = false;
  this.isGoingUp = true;

  this.createPlayer = function () {
    let newPlayer = document.createElement("div");
    newPlayer.setAttribute("id", "player");
    newPlayer.style.top = this.y + "px";
    newPlayer.style.left = this.x + "px";
    this.sprite = newPlayer;
    document.querySelector("#board").appendChild(newPlayer);
  };
  this.jump = function (e) {
/*     if (e.key === " " && self.isJumping === false) {
      self.isJumping = true;
      self.sprite.classList.add("jump");
      let jumpTimer = setInterval(function(){
        console.log(self.sprite.classList)
      }, 20)
      let jumpEnd = setTimeout(() => {
        self.sprite.classList.remove("jump");
        self.isJumping = false;
      }, 1010);
    } */

    if (e.key === " " && self.isJumping === false){
      let timerUp = setInterval(function(){
        self.isJumping = true
        console.log(self.y)
        if (parseInt(self.sprite.style.top) >= 300 && self.isGoingUp) {
          
          self.sprite.style.top = parseInt(self.sprite.style.top) - 5 + "px";
          self.y = self.sprite.style.top;
          if(parseInt(self.sprite.style.top) <= 300){
            self.y = self.sprite.style.top;
            self.isGoingUp = false
          }
        }
        if (!self.isGoingUp) {
          
          self.sprite.style.top = parseInt(self.sprite.style.top) + 5 + "px";
          if(parseInt( self.sprite.style.top) === 500){
            self.isGoingUp = true
            clearInterval(timerUp)
            self.isJumping = false
          }
        }
      },20)
    }
  };
}

export { Player };
