import { Player } from "./components/Player.js";
import { Obstacle } from "./components/Obstacle.js";
import { ObstacleBat } from "./components/ObstacleBat.js";
const board = document.querySelector("#board");
const points = document.querySelector("#points");
const player = new Player(150, 530);
const over = board.querySelector("#gameover");

const restart = document.querySelector("button");
let obstacles = [];
player.createPlayer();

restart.onclick = startGame;
function startGame() {
  over.style.display = "";
  // music.play()
  // laserSound.play()

  points.innerText = 0;

  function obstacleLoop() {
    player.isShooting = false;
    let bat = new ObstacleBat(1100, 500, player);
    bat.createObstacleBat();
    bat.movement();
    let collisionBat = setInterval(bat.checkCollision, 100);
    let newObstacle = new Obstacle(1100, 710, player);
    obstacles.push(newObstacle);
    obstacles.push(bat);
    newObstacle.createObstacle();
    newObstacle.movement();
    let collisionTimer = setInterval(newObstacle.checkCollision, 100);

    let timer = setInterval(function () {
      if (player.isShooting) {
        player.isShooting = false;
        let deadBats = obstacles.filter((obs) => {
          return obs.y < 530;
        });
        obstacles = [
          ...obstacles.filter((obs) => {
            return obs.y > 530;
          }),
        ];

        clearInterval(collisionBat);

        deadBats.forEach((obs) => {
          obs.removeObstacle();
        });
        points.innerText = parseInt(points.innerText) + deadBats.length * 2
        console.log(typeof deadBats.length, typeof points.innerText)
        deadBats = [];
      }
      if (player.isDead) {
        clearInterval(collisionBat);
        clearInterval(collisionTimer);
      }
      if (newObstacle.x + player.width + newObstacle.width <= 0) {
        newObstacle.removeObstacle();
        points.innerText = parseInt(points.innerText) + 5
        clearInterval(timer);
        obstacles.shift();
      }
    }, 10);
  }
  let obstacleGenerator = setInterval(obstacleLoop, 5000);
  function gameOver() {
    if (player.isDead) {
      player.isDead = false;
      clearInterval(checkDeath);
      clearInterval(obstacleGenerator);
      window.onkeydown = "";
      window.onkeyup = "";
      over.style.display = "flex";
      obstacles.forEach((obs) => {
        obs.removeObstacle();
      });
      obstacles = [];
    }
  }
  let checkDeath = setInterval(gameOver, 40);
  window.onkeydown = player.interaction;
  window.onkeyup = player.stop;
}

// var laserSound = new Audio("./assets/laserSound.mp3")
// var music = new Audio("./assets/musica.mp3");
// music.volume = 1;

startGame();
