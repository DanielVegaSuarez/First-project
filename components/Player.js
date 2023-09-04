const landscape = document.querySelector('#landscape')
landscape.style.left = '0px'
function Player(x, y) {
  let self = this;
  this.x = x;
  this.y = y;
  this.sprite;
  this.width = 100;
  this.height = 200;
  this.isJumping = false;
  this.isGoingUp = true;
  this.isDead = false;

  this.createPlayer = function () {
    let newPlayer = document.createElement("div");
    newPlayer.setAttribute("id", "player");
    newPlayer.style.top = this.y + "px";
    newPlayer.style.left = this.x + "px";
    this.x = parseInt(newPlayer.style.left)
    this.y = parseInt(newPlayer.style.top)
    this.sprite = newPlayer;
    document.querySelector("#board").appendChild(newPlayer);
  };
  this.interaction = function (e) {
    if (e.key === " " && self.isJumping === false) {
      self.sprite.style.backgroundImage = 'url(./assets/jump.png)'
      let timerUp = setInterval(function () {
        self.isJumping = true;
        
        if (self.isGoingUp && self.y >=300) {
          self.sprite.style.top = parseInt(self.sprite.style.top) - 5 + "px";
          self.y = parseInt(self.sprite.style.top);
        }else{
          self.isGoingUp = false
        }
        if (!self.isGoingUp) {
          self.sprite.style.top = parseInt(self.sprite.style.top) + 5 + "px";
          self.y = parseInt(self.sprite.style.top);
          if (self.y === 500) {
            self.sprite.style.backgroundImage = ''
            self.isGoingUp = true;
            clearInterval(timerUp);
            self.isJumping = false;
            
          }
        }
      }, 20);
    }
    if(e.key === 'd' && !self.isJumping){  
      self.sprite.classList.add('player-movement')
      landscape.style.left = parseInt(landscape.style.left) - 5 + 'px'
      if(parseInt(landscape.style.left)<= -640){
        landscape.style.left = '0px'
      }
    }
  };
  this.stop = function(e){
    self.sprite.classList.remove('player-movement')
  
  }
}

export { Player };
