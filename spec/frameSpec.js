describe("Frame", function() {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

    it("starts as 0", function() {
      expect(frame.pins).toEqual([])
    });

    it("first ball adds to the score", function() {
      frame.firstBall(5);
      expect(frame.pins[0]).toEqual(5);
    });

    it("returns true if a strike", function(){
      frame.firstBall(10);
      expect(frame.wasAStrike()).toEqual(true);
    });

    it("second ball adds to the score", function() {
      frame.firstBall(5);
      frame.secondBall(4);
      expect(frame.pins[1]).toBe(4);
    });

    it("returns true if a spare", function(){
      frame.firstBall(5);
      frame.secondBall(5);
      expect(frame.wasASpare()).toBe(true);
    });

    it("returns the score for that frame", function() {
      frame.firstBall(5);
      frame.secondBall(4);
      expect(frame.total()).toEqual(9);
    });

});
