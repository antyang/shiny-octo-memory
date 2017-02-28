var arrayToList = function(arr) {
	while(arr.length) {
		return {
			value: arr[0],
			rest: arr[1] === null ? null : arrayToList(arr.splice(1))
		}
	}
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}