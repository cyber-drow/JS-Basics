const hasLicence = true, age = 18, isDrunk = false;

console.log(`Можно ли сесть за руль? - ${(hasLicence && age >= 18 && !isDrunk) ? 'можно' : 'нельзя'}`);