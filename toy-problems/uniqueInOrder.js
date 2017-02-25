var uniqueInOrder = function(iterable){
  var last;
  if(typeof iterable === 'string') {
    iterable = iterable.split('');
  }

  return iterable.reduce(function(acc, curr) {
      if(curr !== last) {
          acc.push(last = curr);
      }
      return acc;
  }, []);

  // clever
  var cb = function(last, index) {
    return iterable[index-1] !== last;
  }
  return [].filter.call(iterable, cb);

};

console.log(uniqueInOrder('AAAABBBCCDAABBB')); //['A','B','C','D','A','B']