function Obstacle (x, y, player) {
    let self = this
    this.x = x
    this.y = y
    this.speed = 1
    this.sprite
    this.moveTimer

    this.createObstacle = function () {
        let newObstacle = document.createElement("div");
        newObstacle.setAttribute("class", "obstacle");
        newObstacle.style.top = this.y + "px";
        newObstacle.style.left = this.x + "px";
        this.sprite = newObstacle
        document.querySelector("#board").appendChild(newObstacle)
    }

    this.movement = function(){
        let timer = setInterval(function(){
            self.sprite.style.left =
              parseInt(self.sprite.style.left) - self.speed + "px";
        }, 30)
         this.moveTimer = timer
    }

    this.removeObstacle = function () {
        document.querySelector("#board").removeChild(this.sprite)
        clearInterval(this.moveTimer)
    }

    this.checkCollision = function() {
        console.log(this.y);
    
        if(
            parseInt(self.sprite.style.left) === parseInt(player.sprite.style.left)
        ) {
            console.log("arrr")
        }
    }
     
}

export { Obstacle }