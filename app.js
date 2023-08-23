function moreThanNum(arrItem, num){
	return arrItem >= num ? true : false;
	}

function lessThanNum(arrItem, num){
	return arrItem <= num ? true : false;
	}


function filterArr(arr, num, fn){
	let newArr = [];
	for (let i = 0; i < arr.length; i++ ){
		let resFn = fn(arr[i], num);
		if (!resFn) {
			newArr.push(arr[i])
		}
	}
	return newArr
}		

const arr = [9, 5, 3, 4, 5, 2, 7, 8];
const num = 5;

console.log(filterArr(arr, num, moreThanNum))
console.log(filterArr(arr, num, lessThanNum))