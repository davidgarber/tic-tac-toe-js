describe('Player', function() {
  it("returns the player's mark", function() {
    var testPlayer = new Player("X");
    expect(testPlayer.mark).to.eql("X");
  });
});

describe('Space', function() {
  it("returns the player's mark at an x coordinate", function() {
    var testSpace = new Space(1, 2, "");
    expect(testSpace.x_coordinate).to.equal(1);
  });

  it("returns the player's mark at a y coordinate", function() {
    var testSpace = new Space(1, 2, "");
    expect(testSpace.y_coordinate).to.equal(2);
  });

  it("lets a player mark the space", function() {
    var testPlayer = new Player("X");
    var testSpace = new Space(1, 2, "");
    testSpace.mark_by(testPlayer)
    expect(testSpace.markedBy).to.equal(testPlayer);
  });
});
