var expect = require('chai').expect;

describe('Main', function () {
    var array;

    // Roda uma vez antes do Bloco.
    before(() => {
    })

    // Roda uma vez depois do Bloco.
    after(() => {
    })

    // Roda todos as vezes, antes de CADA bloco.
    beforeEach(() => {
        array = [1, 2, 3];
        console.log('BeforeEach', array);
    });

    // Roda todas as vezes, depois de CADA bloco.
    afterEach(() => {
    });

    it('should have a size of 4 when push another value to the array', () => {
        array.push(4);
        expect(array).to.have.lengthOf(4);
    });

    it('should have a size of 2 when pop a value from the array', () => {
        array.pop();
        console.log(array.length);
    });

    it('should remove the value 3 when use pop in the array', () => {
        console.log(array.pop() === 3);
        
    })

});