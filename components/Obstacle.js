function Obstacle (x, y) {
    this.x = x
    this.y = y

    this.createObstacle = function () {
        let newObstacle = document.createElement("div");
        newObstacle.setAttribute("class", "obstacle");
        newObstacle.style.top = this.y + "%";
        newObstacle.style.left = this.x + "%";
        document.querySelector("#board").appendChild(newObstacle)
    }
}

export { Obstacle }