/*
  __ is starting a bowling club. To help with the club, we have engaged
  you to program a scoring system. Create one which takes in an array of bowls
  and returns the correct score. Insert your function into the test to validate
  the proper scores.

  The features of the system are:
  - One player only
  - In each frame, the bowler has 2 tries to knock down all the pins
  - After 2 tries, if the bowler fails to knock down all the pins, their score
  is the sum of the number of pins they've knocked down in the 2 attempts.

        E.g, if a bowler rolls, 4,4, then their score in the frame is 8.

  - After 2 tries, if the bowler knocks down all the pins, it is a spare. The
  scoring of a spare is the sum of the number of pins knocked down plus the
  number of pins knocked down in the next bowl.

        E.g, if a bowler rolls, 4,6 | 5,0, then their score in
          the frame is 20 = (4 + 6 + 5) + (5 + 0).

  - After one try, if the bowler knocks down all the pins, it is a strike. The
  scoring of a strike is the sum of the number of pins knocked down plus the
  number of pins knocked down in the next two bowls.

        E.g, if a bowler rolls, 10 | 5, 4, then their score in the frame
        is 28 = (10 + 5 + 4) + (5 + 4).

  - There are 2 rolls in a frame
  - There are 10 frames in a round
  - Don't worry about validating the number of rolls in a frame
*/

var BowlingGame = function() {
  this.rolls = [];
  this.currentRoll = 0;
};

BowlingGame.prototype.roll = function(pins) {
  this.rolls = pins;
};

BowlingGame.prototype.getScore = function() {
  var score = 0;
  var frameIndex = 0;
  var self = this;

  function sumOfBallsInFrame() {
    return self.rolls[frameIndex] + self.rolls[frameIndex + 1];
  }

  function spareBonus() {
    return self.rolls[frameIndex + 2];
  }

  function strikeBonus() {
    return self.rolls[frameIndex + 1] + self.rolls[frameIndex + 2];
  }

  function isStrike() {
    return self.rolls[frameIndex] === 10;
  }

  function isSpare() {
    return self.rolls[frameIndex] + self.rolls[frameIndex + 1] === 10;
  }

  for (var frame = 0; frame < 10; frame++) {
    if (isStrike()) {
      score += 10 + strikeBonus();
      frameIndex++;
    } else if (isSpare()) {
      score += 10 + spareBonus();
      frameIndex += 2;
    } else {
      score += sumOfBallsInFrame();
      frameIndex += 2;
    }
  }
  return score;
};


function test() {
  let games = [
    {
      "bowls": [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      "expected": 60
    },
    {
      "bowls": [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      "expected": 300
    },
    {
      "bowls": [2,6,5,5,8,2,10,7,2,6,2,10,6,4,3,0,7,2],
      "expected": 127
    }
  ]

  games.forEach(function(game) {
    var antony = new BowlingGame();
    antony.roll(game.bowls)
    console.log(antony.getScore())
  })
}

test();
