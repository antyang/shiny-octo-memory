/**
* Merge two sorted arrays
*
* @param two arr of ints
* @return arr of ints
*
* Time: o(n+m)
* AuxSpace: o(n+m)
*/

function mergeArrays(arrOne, arrTwo) {
	var result = [];
	var i = 0;
	var j = 0;
	while ((i+j) < (arrOne.length + arrTwo.length)) {
		if(arrOne.length && (arrOne[i] < arrTwo[j])) {
			result.push(arrOne[i]);
			i++;
		} else {
			result.push(arrTwo[j]);
			j++;
		}
	}
	return result;
}


/**
*
* @param two arr of ints
* @return arr of ints
*
* Time: o(n)
* AuxSpace: o(n)
*/

function mergeArrays(arrOne, arrTwo) {
	var result = [];
	var i = 0;
	var j = 0;
	var resultIndex = 0;

	while (resultIndex < (arrOne.length + arrTwo.length)) {
		var arrOneExhausted = i >= arrOne.length;
		var arrTwoExhausted = j >= arrTwo.length;

		if(!arrOneExhausted && (arrTwoExhausted || arrOne[i] < arrTwo[j])) {
			result[resultIndex] = arrOne[i];
			i++;
		} else {
			result[resultIndex] = arrTwo[j];
			j++;
		}
		resultIndex++
	}
	return result;
}

console.log(mergeArrays([1,5,10], [2,3,12,15])); // => [1,2,3,5,10,12,15]
console.log(mergeArrays([1,2,3], [4,5,6]));
