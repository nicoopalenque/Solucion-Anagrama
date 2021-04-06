const  anagrama  = require('./app');

describe('Test para la funcion de Anagramas', ()=>{
    test('Deberia devolver un TRUE',()=>{
        const expected = anagrama('WOLOX', 'XOLOW');
        const toBe = true;

        expect(expected).toBe(toBe);
    })

    test('Deberia devolver un FALSE', ()=>{
        const expected = anagrama('WOLOX', 'WOLOO');
        const toBe = false;

        expect(expected).toBe(toBe);
    })
})

