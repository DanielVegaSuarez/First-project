function Obstacle(x, y, player) {
  let self = this;
  this.x = x;
  this.y = y;
  this.width = 100;
  this.height = 20;
  this.speed = 1;
  this.sprite;
  this.moveTimer;

  this.createObstacle = function () {
    let newObstacle = document.createElement("div");
    newObstacle.setAttribute("class", "obstacle");
    newObstacle.style.top = this.y + "px";
    newObstacle.style.left = this.x + "px";
    this.sprite = newObstacle;
    this.x = parseInt(this.sprite.style.top);
    document.querySelector("#board").appendChild(this.sprite);
  };

  this.movement = function () {
    let timer = setInterval(function () {
      self.sprite.style.left =
        parseInt(self.sprite.style.left) - self.speed + "px";
      self.x = parseInt(self.sprite.style.left);
    }, 5);
    this.moveTimer = timer;
  };

  this.removeObstacle = function () {
    document.querySelector("#board").removeChild(this.sprite);
    clearInterval(this.moveTimer);
  };

  this.checkCollision = function () {
    if (
      self.x <= player.x &&
      self.x >= -50 &&
      player.y >= self.y - self.height
    ) {
      console.log("collision");
    }
  };
}

export { Obstacle };
