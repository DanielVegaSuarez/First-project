import { Player } from "./components/Player.js";
import { Obstacle } from "./components/Obstacle.js";

const player = new Player(150, 500);
const obstacles = [];
player.createPlayer();

function obstacleLoop() {
  let newObstacle = new Obstacle(1150, 680, player);
  obstacles.push(newObstacle);
    console.log(obstacles)
    
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
let obstacleGenerator = setInterval(obstacleLoop, 2000);

window.onkeydown = player.jump;
