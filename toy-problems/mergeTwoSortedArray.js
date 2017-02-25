/**
* Merge two sorted arrays
*
* @param two arr of ints
* @return arr of ints
*
* Time: o(n+m)
* AuxSpace: o(n+m)
*/
// [1,5,10], [2,3,12,15] => [1,2,3,5,10,12,15]

//o(n+m)
function mergeSorted(arr1, arr2) {
	var results = [];
	var leftIndex = 0;
	var rightIndex = 0;
	var currentIndex = 0;

	while (currentIndex < (arr1.length + arr2.length)) {
		var firstArrIndex = arr1[leftIndex];
		var secondArrIndex = arr2[rightIndex];

		if (firstArrIndex < secondArrIndex) {
			results.push(firstArrIndex)
			leftIndex++;
		} else {
			results.push(secondArrIndex)
			rightIndex++;
		}

		currentIndex++;
	}
	return results;
}


/*

function mergeSorted(arr1, arr2) {
	var mergedArr = arr1.concat(arr2);
	return mergedArr.sort((a,b) => a - b);
}

// o(nm)
function mergeSorted(arr1, arr2) {
	for (var i=0; i <= arr1.length-1;) {
		for (var j=0; j <= arr2.length-1;) {
			if (arr1[i] < arr2[j]) {
				results.push(arr1[i]);
				i++;
			}	else {
				results.push(arr2[j]);
				j++;
			}
		}
	}
}

*/

console.log(mergeSorted([1,5,10], [2,3,12,15]));
console.log(mergeSorted([1,2,3], [4,5,6]));
