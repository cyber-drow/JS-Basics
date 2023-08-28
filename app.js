const arr = ['30-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

const valide = (arr) => {
	if (arr[0] <= 30 && (arr[1] <=12 && arr[1] > 0)) {
		return true;
	}
}

const changeIndex = (arr) => [arr[0], arr[1]] = [arr[1], arr[0]];

const dateArray = (arr) => {
	const arrMap = arr.map(el => {
	if (el.includes('-')) {
		if (valide(el.split('-'))) {
			return el;
		} 
	} else if (el.includes('/')) {
			let change = el.split('/')
			changeIndex(change);
			if (valide(change)){
				return change.join('-');
			} 
	}
})
	const dateFilter = arrMap.filter(el => el);
	return dateFilter
}

console.log(dateArray(arr))