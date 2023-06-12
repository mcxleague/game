class KeyPressListener {
  constructor(keyCode, callback) {
    this.keySafe = true;
    this.keydownFunction = (event) => {
      if (event.code === keyCode && this.keySafe) {
        this.keySafe = false;
        callback();
      }
    };
    this.keyupFunction = (event) => {
      if (event.code === keyCode) {
        this.keySafe = true;
      }
    };
    document.addEventListener("keydown", this.keydownFunction);
    document.addEventListener("keyup", this.keyupFunction);
  }

  unbind() {
    document.removeEventListener("keydown", this.keydownFunction);
    document.removeEventListener("keyup", this.keyupFunction);
  }
}
