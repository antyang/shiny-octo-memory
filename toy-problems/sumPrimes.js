// imperative approach
function isPrime(n) {
  for(var j = 2; j < n; j++) {
    if(n % j === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  var sum = 0;
  for(var i = 2; i <= num; i++) {
    if(isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

sumPrimes(100);


// declarative approach
function sumPrimes(num) {
  if(num < 2) {
    return 0;
  }

  var numbers = [];

  for (var i = 2; i <= num; i++) {
    numbers.push(i);
  }

  return numbers.filter(function(number, index, array) {
    for (var j = 0; j < index; j++) {
      if (number % array[j] === 0)
        return false;
    }
    return true;

  }).reduce(function(sum, el) {
    return sum += el;
  }, 0);
}

sumPrimes(10);


// Using Sieve Of Eratosthenes
var sieveOfEratSum = function(n) {
  var sieve = Array.apply(null, Array(n)).fill(true);
  var limit = Math.sqrt(n);
  var prime = [];

  for(var i = 2; i <= limit; i++) {
    if(sieve[i]) {
      // remove multiples
      for(var j = i*i; j <= n; j += i) {
        // set all multiples
        sieve[j] = false;
      }
    }
  }

  // for all 'unmarked' elements in the array
  for(var i = 2; i <= n; i++) {
    if(sieve[i]) {
      prime.push(i);
    }
  }
  return prime
  .reduce(function(acc, curr) {
    return acc += curr;
  }, 0);
}

sieveOfEratSum(10);