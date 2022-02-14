class SwitchFish extends Fish {
  constructor(options){
    super(options);
    this.imageUri = '/images/goldfish.png'
  }
  onClick(event) {
    this.makeNewVelocity(50);
  }
}
