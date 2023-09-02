import { Player } from "./components/Player.js";
import { Obstacle } from "./components/Obstacle.js";

const player = new Player(150, 500);
const obstacle = new Obstacle(1100, 500, player);

player.createPlayer();

function obstacleLoop() {
  obstacle.createObstacle();
  obstacle.movement();
  let collisionTimer = setInterval(obstacle.checkCollision, 30);
  let timer = setInterval(() => {
    if (obstacle.x + player.width + obstacle.width <= 0) {
      obstacle.removeObstacle();
      clearInterval(collisionTimer);
      clearInterval(timer);
    }
  }, 10);
}
obstacleLoop();

window.onkeydown = player.jump;
