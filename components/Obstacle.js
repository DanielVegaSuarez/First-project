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
    document.querySelector("#board").appendChild(this.sprite);
  };

  this.movement = function () {
    let timer = setInterval(function () {
      self.sprite.style.left =
        parseInt(self.sprite.style.left) - self.speed + "px";
        self.x = self.sprite.style.left;
    }, 5);
    this.moveTimer = timer;
  };

  this.removeObstacle = function () {
    document.querySelector("#board").removeChild(this.sprite);
    clearInterval(this.moveTimer);
  };

  this.checkCollision = function () {
    // Coordenadas del jugador y el obstáculo
    const playerX = player.x;
    const playerY = player.y;
    const obstacleX = parseInt(self.x); 
    const obstacleY = parseInt(self.y);
  
    // Dimensiones del jugador y el obstáculo
    const playerWidth = player.width;
    const playerHeight = player.height;
    const obstacleWidth = self.width;
    const obstacleHeight = self.height;
  
    // Calcula los límites de los dos objetos
    const playerLeft = playerX;
    const playerRight = playerX + playerWidth;
    const playerTop = playerY;
    const playerBottom = playerY + playerHeight;
  
    const obstacleLeft = obstacleX;
    const obstacleRight = obstacleX + obstacleWidth;
    const obstacleTop = obstacleY;
    const obstacleBottom = obstacleY + obstacleHeight;
  
    // Comprueba si hay colisión
    if (
      playerRight >= obstacleLeft &&
      playerLeft <= obstacleRight &&
      playerBottom >= obstacleTop &&
      playerTop <= obstacleBottom
    ) {
      console.log("Colisión detectada");
      // Realiza aquí las acciones necesarias en caso de colisión
    }
  };
}

export { Obstacle };
