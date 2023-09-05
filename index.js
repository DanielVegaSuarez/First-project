import { Player } from "./components/Player.js";
import { Obstacle } from "./components/Obstacle.js";
import { ObstacleBat } from "./components/ObstacleBat.js";
const board = document.querySelector("#board");
const points = document.querySelector("#points");
const player = new Player(150, 530, board);
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
    let bat = new ObstacleBat(1100, 500, player);
    bat.createObstacleBat();
    bat.movement();
    let collisionBat = setInterval(bat.checkCollision, 100);
    let newObstacle = new Obstacle(1100, 710, player);
    obstacles.push(newObstacle);
    newObstacle.createObstacle();
    newObstacle.movement();
    let collisionTimer = setInterval(newObstacle.checkCollision, 30);

    let timer = setInterval(function(){
      if(player.isDead){
        clearInterval(collisionBat)
      }
      if (newObstacle.x + player.width + newObstacle.width <= 0) {
        newObstacle.removeObstacle();
        points.innerText++;
        clearInterval(collisionTimer);
        clearInterval(timer);
        obstacles.shift();
      }
    }, 10);
  }
  let obstacleGenerator = setInterval(obstacleLoop, 4000);
  function gameOver() {
    if (player.isDead) {
      clearInterval(checkDeath);
      clearInterval(obstacleGenerator);
      window.onkeydown = "";
      window.onkeyup = "";
      over.style.display = "flex";
      player.isDead = false;
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
