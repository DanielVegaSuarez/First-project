import { Player } from "./components/Player.js";
import { Obstacle } from "./components/Obstacle.js";
const board = document.querySelector('#board')
const gameTimer = document.querySelector('#timer')
const player = new Player(150, 500, board);
const obstacles = [];
let timePlaying = 0

function startGame(){
  let timePlayingUp = setInterval(function(){
    gameTimer.innerText = timePlaying
    timePlaying++
    
  }, 1000)
 
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
  let obstacleGenerator = setInterval(obstacleLoop, 3000);
  
  window.onkeydown = player.interaction;
  window.onkeyup = player.stop
}
startGame()

