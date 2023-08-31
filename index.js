import { Player } from "./components/Player.js"

const player = new Player(60, 10);

player.createPlayer()
window.onkeydown = player.jump


