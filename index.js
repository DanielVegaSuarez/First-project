import { Player } from "./components/Player.js";
import { Obstacle } from "./components/Obstacle.js";
import { ObstacleBat } from "./components/ObstacleBat.js";
const board = document.querySelector("#board");
const points = document.querySelector("#points");
const player = new Player(150, 530, board);
const bat = new ObstacleBat(1100, 500, board);
let obstacles = [];
player.createPlayer();
bat.createObstacleBat();
bat.movement();
function startGame() {
  points.innerText = 0;
  function obstacleLoop() {
    let newObstacle = new Obstacle(1100, 710, player);
    obstacles.push(newObstacle);

    newObstacle.createObstacle();
    newObstacle.movement();
    let collisionTimer = setInterval(newObstacle.checkCollision, 30);

    let timer = setInterval(() => {
      if (newObstacle.x + player.width + newObstacle.width <= 0) {
        newObstacle.removeObstacle();
        points.innerText++;
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
      obstacles.forEach((obs) => {
        obs.removeObstacle();
      });
      obstacles = [];
      clearInterval(checkDeath);
    }
  }
  let checkDeath = setInterval(gameOver, 10);
  window.onkeydown = player.interaction;
  window.onkeyup = player.stop;
}
startGame();
