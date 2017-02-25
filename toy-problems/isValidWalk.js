/**
* You live in the city of Cartesia where all roads are laid out in a perfect grid.
* You arrived ten minutes too early to an appointment, so you decided to take the
* opportunity to go for a short walk. The city provides its citizens with a -
* Walk Generating App on their phones -- everytime you press the button it sends 
* you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
* You know it takes you one minute to traverse one city block, so create a function that will 
* return true if the walk the app gives you will take you exactly ten minutes 
* (you don't want to be early or late!) and will, of course, return you to your starting point. 
* Return false otherwise.
*/

function isValidWalk(walk) {
  if(walk.length < 10 || walk.length > 10) return false;
  var walkCountObj = walk.reduce(function(acc, curr) {
    if(acc[curr] === undefined) {
      acc[curr] = 1;
    } else {
      ++acc[curr];
    }
    return acc;
  }, {})
  if(walkCountObj.n === walkCountObj.s && walkCountObj.w === walkCountObj.e) {
    return true;
  }
  return false;
}

isValidWalk(['n','n','w','s','e','n','w','s','s','e']); // true