import { Player } from "./components/Player.js"
import { Obstacle } from "./components/Obstacle.js"

const player = new Player(60, 10);
const obstacle = new Obstacle(60,100)

obstacle.createObstacle()
player.createPlayer()
window.onkeydown = player.jump


