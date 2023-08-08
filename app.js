const pass = 'password';
const cryptoPass = 'osapdrws'

const crypto = (text) => {
	text = text.split('');
	const first = text.splice(text.length - 2, 2).reverse();
	const second = text.splice(text.length - 1,);
	const third = text.splice(text.length - 2,).reverse();
	const fourth = text.reverse();
	return second.concat(fourth, first, third).join('');
	
}

const check = (cryptoPass, pass) => {
	if (cryptoPass.length != pass.length) {
		return false
	}
	cryptoPass = cryptoPass.split('');
	const first = cryptoPass.splice(cryptoPass.length - 2, 2).reverse();
	const second = cryptoPass.splice(cryptoPass.length -2, 2).reverse();
	const third = cryptoPass.splice(0, 1);
	cryptoPass.reverse();
	const result = cryptoPass.concat(first, third, second).join('');
	return result === pass ? true : false;
}


console.log(crypto(pass));
console.log(check(cryptoPass, pass))