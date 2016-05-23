function Frame() {
  this.pins = [];
  this._total = 0;
}

Frame.prototype.firstBall = function (pins) {
  this.pins.push(pins);
};

Frame.prototype.secondBall = function (pins) {
  this.pins.push(pins);
};

Frame.prototype.wasAStrike = function () {
  return this.pins[0] === 10;
};

Frame.prototype.wasASpare = function () {
  return (this.pins[0] + this.pins[1]) === 10;
}

Frame.prototype.total = function () {
  this._total = this.pins[0] + this.pins[1]
  return this._total;
};
