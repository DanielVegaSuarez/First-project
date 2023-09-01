function Obstacle (x, y) {
    this.x = x
    this.y = y

    this.createObstacle = function () {
        let newObstacle = document.createElement("div");
        newObstacle.setAttribute("id", "obstacle");
        newObstacle.style.top = this.x + "%";
        newObstacle.style.left = this.y + "%";
        document.querySelector("#board").appendChild(newObstacle)
    }
}

export { Obstacle }