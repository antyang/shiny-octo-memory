function pascal(lineLimit, linesArr) {
  if(!linesArr || linesArr.length === 0) {
    return pascal(lineLimit, [[1]]);
  }

  let newLine = [];
  let lastLine = linesArr[linesArr.length - 1];

  for(var i = 1; i < lastLine.length; i++) {
    newLine.push(lastLine[i - 1] + lastLine[i]);
  }

  newLine.unshift(1);
  newLine.push(1);

  linesArr.push(newLine);

  if(lineLimit === linesArr.length) {
    return linesArr;
  } else {
    return pascal(lineLimit, linesArr);
  }
}

console.log(pascal(6));