let Rat = function (name, weight, speed, sound) {

  this.name = name;
  this.weight = weight;
  this.speed = speed;
  this.sound = sound;
  this.status = true;

  this.isLife = function () {
      return this.status;
  };

  this.said = function () {
      console.log(this.sound);
  }

};

let Cat = function (name, weight, maxspeed, sound) {

    this.name = name;
    this.weight = weight;
    this.maxspeed = maxspeed;
    this.sound = sound;
    
    this.said = function () {
        console.log(this.sound);
    };

    this.isRatLife = function (rat) {
        return rat.isLife();
    };

    this.isCatchRat = function (ratSpeed) {
        return this.maxspeed > ratSpeed;
    };

    this.eatRat = function (rat) {
        if (this.isCatchRat() && this.isRatLife(rat)) {
            this.weight += rat.weight;
            rat.status = false;
        }
    };

};

let cat = new Cat("cat", 10, 5, "meo, meo");
let rat = new Rat("rat", 3, 3, "chit, chit");
let superRat = new Rat("superRat", 14, 10, "chit, chat");




