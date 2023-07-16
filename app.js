const lang = prompt('Введите язык: ');

switch (true) {
    case (lang == 'ru'):
        console.log('Добрый день!');
        break;
    case (lang == 'de'):
        console.log('Gutten tag!');
        break;
    case (lang == 'en'):
        console.log('Good day!');
        break;
    default: 
        console.log('Введен неподдерживаемый язык');
}