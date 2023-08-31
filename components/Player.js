function Player (x, y) {
    this.x = x;
    this.y = y
    this.createPlayer = function () {
        let newPlayer = document.createElement("div")
        newPlayer.setAttribute("id", "player")
        newPlayer.style.top = this.x + "%"
        newPlayer.style.left = this.y + "%"
        document.querySelector("#board").appendChild(newPlayer)

    }
}



export { Player }