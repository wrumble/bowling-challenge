function Bowling() {
  this.score = 0;
  this._frames = [];
  this.frameNumber = 0;
}

Bowling.prototype.newFrame = function(frame) {
  this.frameNumber += 1;
  this._frames.push(frame);
};

Bowling.prototype.currentFrame = function () {
  return this._frames[this._frames.length-1];
};

Bowling.prototype.previousFrame = function () {
  return this._frames[this._frames.length-2];
};

Bowling.prototype.frameScore = function () {
  if(this._frames.length > 1 && this.previousFrame().wasASpare()) {
    this.previousFrame()._total += this.currentFrame().pins[0];
    return this._frames[0].total
  }
  return this._frames[0].total();
};

Bowling.prototype.totalScore = function () {
  for(var i = 0; i < this.frameNumber; i+=1) {
    this.score += this.frameScore();
  }
  return this.score;
};
