import { Player } from "./components/Player.js"
import { Obstacle } from "./components/Obstacle.js"

const player = new Player(150, 500);
const obstacle = new Obstacle(1100, 500, player)


player.createPlayer()

function obstacleLoop (){
    obstacle.createObstacle()
   /*  obstacle.movement() */
    let collisionTime = setInterval(obstacle.checkCollision, 30);
    let timer = setInterval(()=>{
        if(parseInt(obstacle.sprite.style.left) + 18 <= 0){
            obstacle.removeObstacle()
            clearInterval(collisionTime)
            clearInterval(timer)
        }
    }, 25)
    
}
obstacleLoop()

window.onkeydown = player.jump


