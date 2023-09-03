import { Player } from "./components/Player.js";
import { Obstacle } from "./components/Obstacle.js";
const board = document.querySelector("#board");
const player = new Player(150, 500, board);
let obstacles = [];
player.createPlayer();

function obstacleLoop() {
  let newObstacle = new Obstacle(1100, 680, player);
  obstacles.push(newObstacle);

  newObstacle.createObstacle();
  newObstacle.movement();
  let collisionTimer = setInterval(newObstacle.checkCollision, 30);

  let timer = setInterval(() => {
    if (newObstacle.x + player.width + newObstacle.width <= 0) {
      newObstacle.removeObstacle();
      clearInterval(collisionTimer);
      clearInterval(timer);
      obstacles.shift();
    }
  }, 10);
}
let obstacleGenerator = setInterval(obstacleLoop, 5000);
function gameOver() {
  if (player.isDead) {
    clearInterval(obstacleGenerator);
    alert("game over");
    obstacles.forEach(obs =>{
      obs.removeObstacle()
    })
    obstacles = []
    clearInterval(checkDeath);
  }
}
let checkDeath = setInterval(gameOver, 10);
window.onkeydown = player.interaction;
window.onkeyup = player.stop;
