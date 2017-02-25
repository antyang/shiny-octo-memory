String.prototype.toAlternatingCase = function () {
  var newStr = this.split('');
  var result = '';
  newStr.forEach(function(el) {
    if(el === el.toUpperCase()) {
      result += el.toLowerCase();
    } else {
      result += el.toUpperCase();
    }
  });
  return result;
};

console.log('hElLo'.toAlternatingCase()); // 'HeLlO'