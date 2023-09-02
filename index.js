import { Player } from "./components/Player.js";
import { Obstacle } from "./components/Obstacle.js";

const player = new Player(150, 500);
const obstacles = [];
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
  ;
}
let obstacleGenerator = setInterval(obstacleLoop, 5000);

window.onkeydown = player.interaction;
window.onkeyup = player.stop
