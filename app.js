function exchange(sum, currency, target){
	const exRateRubToUsd = 0.011007;
	const exRateRubToEur = 0.00982;
	const exRateRubToGbp = 0.008542;

	const exRateUsdToRub = 90.85;
	const exRateUsdToEur = 0.89219;
	const exRateUsdToGbp = 0.7761;

	const exRateEurToRub = 101.83;
	const exRateEurToUsd = 1.12;
	const exRateEurToGbp = 0.86988;

	const exRateGbpToRub = 117.07;
	const exRateGbpToUsd = 1.29;
	const exRateGbpToEur = 1.15;

	switch (currency){
		case 'rub': {
			switch (target){
				case 'usd': return sum * exRateRubToUsd;
				case 'eur': return sum * exRateRubToEur;
				case 'gbp': return sum * exRateRubToGbp;
				default: return null;
			}
			}
		case 'usd': {
			switch (target){
				case 'rub': return sum * exRateUsdToRub;
				case 'eur': return sum * exRateUsdToEur;
				case 'gbp': return sum * exRateUsdToGbp;
				default: return null;
			}
		}
		case 'eur': {
			switch (target){
				case 'rub': return sum * exRateEurToRub;
				case 'usd': return sum * exRateEurToUsd;
				case 'gbp': return sum * exRateEurToGbp;
				default: return null;
			}
		}
		case 'gbp': {
			switch (target){
				case 'rub': return sum * exRateGbpToRub;
				case 'usd': return sum * exRateGbpToUsd;
				case 'eur': return sum * exRateGbpToEur;
				default: return null;
			}  
		}
		default: return null; 
	}
}

console.log(exchange(1000, 'rub', 'usd'));
