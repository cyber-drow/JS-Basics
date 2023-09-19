const cardNumber = '4561-2612-1234-5464';

const checkLuna = (card) => {
	const cardArr = card.replaceAll('-', '').split('').map((el) => el * 1);
	const modCard = cardArr.map((el, i) => {
		if (i % 2 === 0) {
			if (el * 2 > 9) {
				return el * 2 - 9 ;
			} return el * 2;
		}
		return el;
	});
	const resultLuna = modCard.reduce((acc, valuemodCard) => {
		return acc += valuemodCard;
	}, 0);
	return resultLuna % 10 === 0 ? true : false;
}

console.log(checkLuna(cardNumber));