const { generatePassword } = require('./utils')

describe('Generate password', () => {

    test('Should create instance', () => {
        expect(generatePassword('123456789', 4)).not.toBe(undefined)
    });

    test('Should create instance type string', () => {
        expect(typeof generatePassword('123456789', 6)).toBe('string')
    });

    test('Should create correct length', () => {
        let password1 = generatePassword('123456789', 8);
        let length1 = password1.length;
        expect(password1.length).toBe(length1);

        let password2 = generatePassword('abcdifjhi', 3);
        let length2 = password2.length;
        expect(password2.length).toBe(length2);

        let password3 = generatePassword('.,/?!@#$%^&*()_+[]{}', 0);
        let length3 = password3.length;
        expect(password3.length).toBe(length3);
    });

    test('Should generate random password', () => {
        let symbolsList = '0123456789';
        let passwordLength = 5;
        expect(generatePassword(symbolsList, passwordLength)).not.toBe(generatePassword(symbolsList, passwordLength));
    });

    test('Should include characters only from symbolsList', () => {
        let symbolsList = '0123456789';
        let passwordLength = 5;
        let password = generatePassword(symbolsList, passwordLength);
        let result = true;
        for (let i = 0; i < password.length; i++) {
            if (symbolsList.indexOf(password[i]) === -1) {
                result = false;
            }
        }
        expect(result).toBe(true);
    });
})