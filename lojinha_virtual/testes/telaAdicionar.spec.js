
//construindo casos de testes:

describe('conjunto de testes', function () {   //describe que agrupa todos os casos de teste
    var produtosTeste;

    beforeEach(angular.mock.module('lojaModulo'));

    beforeEach(inject(function (produto) {
        produtosTeste = produto;

    }))
    //codificando casos de teste:
    it('serviço Existe?', function () {
        expect(produtosTeste).toBeDefined();

    });




    // ADICIONA O PRODUTO NO FORMULÁRIO E ENVIA PARA O BANCO DE DADOS: 

    //verifica se o metodo está definido-   
    // describe('.adiciona_produto()', function () {
    //     it('Método adicionar produto existe?', function () {
    //         expect(produtosTeste.adiciona_produto).toBeDefined();
    //     });

    //     //simula o retorno do metodo-     
    //     it('deveria enviar os dados para o Banco de dados', function () {
    //         expect(produtosTeste.adiciona_produto()).toEqual(produtos);

    //     });



    // });


});






