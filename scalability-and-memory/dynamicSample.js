function climbStairs(n){
  var cache = {};

  function helper(n){
    if (n < 2){
      return 1;
    } else if (n === 2){
      return 2;
    }

    return helper(n-1) + helper(n-2) + helper(n-3);
  }
  return helper(n);
}

console.time('Original');
console.log(climbStairs(30));
console.timeEnd('Original');


function climbStairsMemo(n){
    var cache = {};

  function helper(n){
    if (cache[n] !== undefined){
      return cache[n];
    } else if (n < 2){
      return 1;
    } else if (n === 2){
      return 2;
    }

    var ways = helper(n-1) + helper(n-2) + helper(n-3);
    cache[n] = ways;
    return ways;

  }
  return helper(n);
}


console.time('memo');
console.log(climbStairsMemo(30));
console.timeEnd('memo');


function climbStairsTab(n){
  var table = [1,1,2];

  for (var i = 3; i < n+1; i++){
    table[i] = table[i-1] + table[i-2] + table[i-3]
  }

  return table[n];
}



console.time('tab');
console.log(climbStairsTab(30));
console.timeEnd('tab');

