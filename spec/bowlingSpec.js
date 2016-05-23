describe("Bowling", function() {
  var bowling;
  var currentFrame;
  var oldframe;

  beforeEach(function () {
    bowling = new Bowling();
    currentFrame = new Frame();
    oldFrame = new Frame();
  });

  describe("Score", function() {

    it("starts at 0", function() {
      expect(bowling.score).toEqual(0);
    });

    it("returns current frame score", function() {
      bowling.newFrame(currentFrame);
      bowling.currentFrame().firstBall(5);
      bowling.currentFrame().secondBall(4);
      expect(bowling.totalScore()).toEqual(9);
    });

    it("returns correct score after two frames", function() {
      bowling.newFrame(oldFrame);
      bowling.currentFrame().firstBall(5);
      bowling.currentFrame().secondBall(4);
      bowling.newFrame(currentFrame);
      bowling.currentFrame().firstBall(3);
      bowling.currentFrame().secondBall(6);
      expect(bowling.totalScore()).toEqual(18)
    });

    it("returns correct score after a spare and a normal frame", function() {
      bowling.newFrame(oldFrame);
      bowling.currentFrame().firstBall(5);
      bowling.currentFrame().secondBall(5);
      bowling.newFrame(currentFrame);
      bowling.currentFrame().firstBall(3);
      bowling.currentFrame().secondBall(6);
      expect(bowling.totalScore()).toEqual(22)
    });

  });

  describe('Frames', function() {

    it("starts empty", function() {
      expect(bowling._frames).toEqual([]);
    })

    it("frame number starts at 0", function() {
      expect(bowling.frameNumber).toEqual(0);
    });

    it("creates a new frame", function() {
      bowling.newFrame(currentFrame);
      expect(bowling._frames[0]).toBe(currentFrame);
    })

    it("gets the current frame", function() {
      bowling.newFrame(currentFrame);
      expect(bowling.currentFrame()).toBe(currentFrame);
    })

    it("accesses previous frame details", function() {
      var oldFrame = new Frame;
      bowling.newFrame(oldFrame);
      bowling.newFrame(currentFrame);
      expect(bowling.previousFrame()).toBe(oldFrame);
    });
  })

});
