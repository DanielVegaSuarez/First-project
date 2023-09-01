import { Player } from "./components/Player.js"
import { Obstacle } from "./components/Obstacle.js"

const player = new Player(10, 60);
const obstacle = new Obstacle(95, 60)

player.createPlayer()
function obstacleLoop (){
    obstacle.createObstacle()
    obstacle.movement()
    setInterval(()=>{
        if(parseInt(obstacle.sprite.style.left) + 18 <= 0){
            obstacle.removeObstacle()
        }
    }, 25)
}
obstacleLoop()

window.onkeydown = player.jump


