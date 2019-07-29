import { factorial } from "./08_testing";

//Suite
fdescribe('Calculo del factorial', () => {
    
    //Espectativas
    it('4 should be 4', () => {
        let x = 4
        expect(x).toBe(4)        
    });

    it('5 should be 4', () => {
        let s = 5
        expect(s).not.toBe(4)
    });

    it('0! should be 1', () => {
        let x = 1
        expect(factorial(x)).toBe(1)        
    });

    it('1! should be 1', () => {
        let x = 1
        expect(factorial(x)).toBe(1)        
    });

    it('5! should be 120', () => {
        let x = 5
        expect(factorial(x)).toBe(120)        
    });

    it('-5! should be 120', () => {
        let x = -5
        expect( () => factorial(x)).toThrowError('Numero Negativo')       
    });

    it('5,5! should be 120', () => {
        let x = 5.5
        expect( () => factorial(x)).toThrowError('Numero con decimales')        
    });
});