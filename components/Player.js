function Player(x, y) {
  let self = this;
  this.x = x;
  this.y = y;
  this.sprite;
  this.isJumping = false;
  this.createPlayer = function () {
    let newPlayer = document.createElement("div");
    newPlayer.setAttribute("id", "player");
    newPlayer.style.top = this.y + "px";
    newPlayer.style.left = this.x + "px";
    this.sprite = newPlayer;
    document.querySelector("#board").appendChild(newPlayer);
  };
  this.jump = function (e) {
    if (e.key === " " && self.isJumping === false) {
      self.isJumping = true;
      self.sprite.classList.add("jump");
      let timer = setTimeout(() => {
        self.sprite.classList.remove("jump");
        self.isJumping = false;
      }, 1010);
    }
  };
}

export { Player };
