export function generateId(): string {
    const lowerLetter = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let id = '';
    while (id.length < 10) {
        const type = random(3);
        if (type === 0) {
            const index = random(lowerLetter.length);
            id += lowerLetter[index];
        } else if (type === 1) {
            const index = random(upperCase.length);
            id += upperCase[index];
        } else if (type === 2) {
            const index = random(9);
            id += index;
        }
    }
    return id;
}

export function random(until: number) {
    return Math.floor(Math.random() * until);
}


export function convertNumberToRomanNumerals(num: number) {
    let romanNum = '';
    while (num > 999) {
        romanNum += 'M';
        num -= 1000;
    }
    while (num > 499) {
        romanNum += 'D';
        num -= 500;
    }
    while (num > 99) {
        romanNum += 'C';
        num -= 100;
    }
    while (num > 49) {
        romanNum += 'L';
        num -= 50;
    }
    while (num > 9) {
        romanNum += 'X';
        num -= 10;
    }
    romanNum += oneDigit(num);
    return romanNum;
}

function oneDigit(num: number) {
    switch (num) {
        case 1:
            return 'I';
        case 2:
            return 'II';
        case 3:
            return 'III';
        case 4:
            return 'IV';
        case 5:
            return 'V';
        case 6:
            return 'VI';
        case 7:
            return 'VII';
        case 8:
            return 'VIII';
        case 9:
            return 'IX';
        default: return '';
    }
}
