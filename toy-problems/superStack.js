function superStack(operations) {
  var stack = [];
  operations.forEach(function(op) {
    var newOp = op.split(' ');

    if(newOp[0] === 'inc') {
      for(var i = 0; i < parseInt(newOp[1]); i++) {
        stack[i] += parseInt(newOp[2]);
      }
      console.log(stack[stack.length-1]);
    }
    else if(newOp[1]) {
      stack[newOp[0]](parseInt(newOp[1]));
      console.log(stack[stack.length-1])
    } else {
      stack[newOp[0]]();
      console.log(stack[stack.length-1] || "EMPTY")
    }
  })
}


var output = [
  'push 4',
  'pop',
  'push 3',
  'push 5',
  'push 2',
  'inc 3 1',
  'pop',
  'push 1',
  'inc 2 2',
  'push 4',
  'pop',
  'pop'
];

console.log(superStack(output));

