
//construindo casos de testes:

describe ('conjunto de testes',function(){
    var adicionarProdutoTeste;

    beforeEach(angular.mock.module('lojaModulo'));

    beforeEach(inject(function(dadosProduto){
        adicionarProdutoTeste = dadosProduto;

    }))    
    //codificando casos de teste:
    it('produto cadastrado?', function(){
        expect( adicionarProdutoTeste ).toBeDefined();

    });  

});