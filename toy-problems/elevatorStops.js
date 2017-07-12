/*
There is an elevator in a building with M floors. This elevator can take a max of X people at a time or max of total weight Y.
Given that a set of people and their weight and the floor they need to stop, how many stops has the elevator taken to serve all the people?
Consider the elevator serves in "first come first serve" basis and the order for the queue can not be changed.

Example:
Let Array A be the weight of each person A = [60, 80, 40].
Let Array B be the floors where each person needs to be dropped off B = [2, 3, 5].

The building has 5 floors, maximum of 2 persons are allowed in the elevator at a time with max weight capacity being 200.
For this example, the elevator would take total of 5 stops in floors: 2, 3, G, 5 and finally G.
*/

/*
A - array of passengers weight
B - array of passengers destination floor
M - number of floors
X - elevator max passenger
Y - elevator max weight
*/

function solution(A, B, M, X, Y) {
  let trip = 0;
  let tripWeight = 0;
  let rounds = [];

  for (let i = 0; i < A.length; i++) {
    if (typeof rounds[trip] !== 'undefined') {
      if (rounds[trip].length === X || tripWeight + A[i] > Y) {
        trip++;
        tripWeight = 0;
    }
  }
  // reset trip
  rounds[trip] = rounds[trip] || [];
  rounds[trip].push(B[i]);
  tripWeight += A[i];
  }

  rounds = rounds.map(round => uniq(round).length + 1);

  // sum of count each trip
  return rounds.reduce((acc, curr) => acc + curr, 0);
}

function uniq(arr) {
  return arr.reduce((acc, curr) => {
    if (acc.indexOf(curr) === -1) {
      acc = acc.concat(curr);
    }
    return acc;
  }, []);
}

var output = solution([60, 80, 40], [2, 3, 5], 5, 2, 200);
console.log(output); // => 5