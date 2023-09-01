import { Player } from "./components/Player.js"
import { Obstacle } from "./components/Obstacle.js"

const player = new Player(10, 60);
const obstacle = new Obstacle(95, 60)

player.createPlayer()
function obstacleLoop (){
    obstacle.createObstacle()
    obstacle.movement()
    let timer = setInterval(()=>{
        if(parseInt(obstacle.sprite.style.left) + 18 <= 0){
            obstacle.removeObstacle()
            clearInterval(timer)
        }
    }, 25)
    
}
obstacleLoop()

window.onkeydown = player.jump


