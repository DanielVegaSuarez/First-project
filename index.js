import { Player } from "./components/Player.js";
import { Obstacle } from "./components/Obstacle.js";
import { ObstacleBat } from "./components/ObstacleBat.js";
const board = document.querySelector("#board");
const points = document.querySelector("#points");
const player = new Player(150, 530, board);
const over = board.querySelector('#gameover')
const bat = new ObstacleBat(1100, 500, player);
let obstacles = [];
player.createPlayer();
bat.createObstacleBat();
bat.movement();

function startGame() {
  music.play()
  laserSound.play()

  points.innerText = 0;
  let collisionBat = setInterval(bat.checkCollision, 30)
  
  function obstacleLoop() {
    console.log('pinchos')
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
      console.log(over.style.display = 'flex')
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

var laserSound = new Audio("./assets/laserSound.mp3")
var music = new Audio("./assets/musica.mp3");
music.volume = 1;


startGame();
