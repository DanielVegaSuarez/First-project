function Obstacle (x, y) {
    let self = this
    this.x = x
    this.y = y
    this.speed = 1
    this.sprite
    this.moveTimer

    this.createObstacle = function () {
        let newObstacle = document.createElement("div");
        newObstacle.setAttribute("class", "obstacle");
        newObstacle.style.top = this.y + "%";
        newObstacle.style.left = this.x + "%";
        this.sprite = newObstacle
        document.querySelector("#board").appendChild(newObstacle)
    }

    this.movement = function(){
        let timer = setInterval(function(){
            self.sprite.style.left =
              parseInt(self.sprite.style.left) - self.speed + "%";
        }, 100)
         this.moveTimer = timer
    }

    this.removeObstacle = function () {
        document.querySelector("#board").removeChild(this.sprite)
        clearInterval(this.moveTimer)
    }
    
}

export { Obstacle }