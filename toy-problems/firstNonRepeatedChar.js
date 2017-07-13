function firstNonRepeatedChar(string) {
  var strArr = string.split('');
  var idx = 0;

  while(idx !== string.length) {
    var characters = strArr.filter(el => {
      return el === string.charAt(idx);
    })
    if(characters.length === 1) {
      return string.charAt(idx);
    }
    idx++;
  }
}

console.log(firstNonRepeatedChar("mnonmpsms") === "o");