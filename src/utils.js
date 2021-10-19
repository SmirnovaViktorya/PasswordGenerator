import { numbers, upperCaseLetters, lowerCaseLetters, specialSymbols } from './symbols';

export function generateSymbolsList({ UpperCase, LowerCase, Numbers, Symbols }) {
    let symbolsList = '';
    if (UpperCase) {
        symbolsList += upperCaseLetters
    }
    if (LowerCase) {
        symbolsList += lowerCaseLetters
    }
    if (Numbers) {
        symbolsList += numbers
    }
    if (Symbols) {
        symbolsList += specialSymbols
    }
    return symbolsList;
}

export function generatePassword(symbolsList, passwordLength) {
    let password = '';
    const lengthSymbolsList = symbolsList.length - 1;
    for (let i = 0; i < passwordLength; i++) {
        const index = Math.round(Math.random() * lengthSymbolsList);
        password += symbolsList.charAt(index)
    }
    return password
}

export function copyToClipboard(text) {
    const newTextArea = document.createElement('textarea');
    newTextArea.innerText = text;
    document.body.appendChild(newTextArea)
    newTextArea.select();
    document.execCommand('copy');
    newTextArea.remove();
}