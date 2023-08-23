const arr = [1, 40, -5, 10, 0];

const sortArr = (arr) => {
	for (let i = 1; i < arr.length; i++ ){
		for (let j = 0; j < i; j++ ) {
			if (arr[i] < arr[j]){
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
		}
	}
	return arr
}

console.log(sortArr(arr))
