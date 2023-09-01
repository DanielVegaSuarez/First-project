import { Player } from "./components/Player.js"
import { Obstacle } from "./components/Obstacle.js"

const player = new Player(10, 60);
const obstacle = new Obstacle(100, 85)

obstacle.createObstacle()
player.createPlayer()
obstacle.movement()
window.onkeydown = player.jump


