module.exports = function toReadable (number) {
    if (!number) return 'zero';

    const unitsGroup = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };

    const dozensGroup = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };


    let numberWord = [];

    const units = number % 10;
    const dozens = Math.floor(number / 10) % 10;
    const hundreds = Math.floor(number / 100);

    if (hundreds) {
        numberWord.push(unitsGroup[hundreds] + ' hundred');
     }
     
     if (number % 100 < 20) {
         if (number % 100) {
             numberWord.push(unitsGroup[number % 100]);
         } 
     } else {
            if (dozens) numberWord.push(dozensGroup[dozens]);
            if (units) numberWord.push(unitsGroup[units]);
        }
     return numberWord.join(' ').trim();
}
