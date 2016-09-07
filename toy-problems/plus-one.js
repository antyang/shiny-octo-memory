/**
* Plus One
*
* @param arr of ints
* @return arr of ints
*
* Time: o(n)
* AuxSpace: o(1)
*/

function plusOne(arr) {
	if (!arr.length) return;

	for (var i = arr.length; i--;) {
		arr[i] += 1;
		if (arr[i] === 10) {
			arr[i] = 0;
		} else {
			return arr;
		}
	}
	arr.unshift(1)
	return arr;
}

console.log(plusOne([]));
console.log(plusOne([4]));
console.log(plusOne([1,9]));
console.log(plusOne([1,2,3]));

// edge case
console.log(plusOne([9,9,9]));
