/**
* One of the simplest and most widely known ciphers is a Caesar cipher, also known
* as a shift cipher. In a shift cipher the meanings of the letters are shifted by
* some set amount.
*
* A common modern use is the ROT13 cipher, where the values of the letters are
* shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
*
* Write a function which takes a ROT13 encoded string as input and returns a
* decoded string.
*/

function rot13(str) {
  return str.split('').map.call(str, (char) => {
    var x = char.charCodeAt()

    if (x < 65 || x > 90) {
      return String.fromCharCode(x)
    } else if (x > 77) {
      return String.fromCharCode(x - 13)
    } else {
      return String.fromCharCode(x + 13)
    }

  }).join('')
}

console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."))
