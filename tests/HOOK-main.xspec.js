describe('Main', function () {

    // Roda uma vez antes do Bloco.
    before(() => {
        console.log('before');
        
    })

    // Roda uma vez depois do Bloco.
    after(() => {
        console.log('After');
        
    })

    // Roda todos as vezes, antes de CADA bloco.
    beforeEach(() => {
        console.log('BeforeEach');
        
    });

    // Roda todas as vezes, depois de CADA bloco.
    afterEach(() => {
        console.log('AfterEach');
        
    });

    it('Test 1', () => {
        console.log('Test 1');
        
    })

    it('Test 2', () => {
        console.log('Test 2');
        
    })

});