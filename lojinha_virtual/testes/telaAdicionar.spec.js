
//construindo casos de testes:

describe('conjunto de testes', function () {   //describe que agrupa todos os casos de teste


    // chama o módulo que tem a incrementação do serviço;
    beforeEach(angular.mock.module('lojaModulo', function () { ['cur.$mask'] }));
    var $controller;// var que guarda o controller
    var $rootScope; /// var que guarda os scopes

    //injeta o serviço; guarda nas vars o controller e rootScope para usar nos casos de teste; 
    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_
        $rootScope = _$rootScope_

    }));

    //Caso de teste que executa e testa se o serviço foi definido ou não.
    it('Serviço existe?', function () {
        expect($controller).toBeDefined();
        expect($rootScope).toBeDefined();
    });//TOTAL: 1 SUCCESS


});


























    //CODIFICANDO TESTES:

//     describe('dado um formulario incompleto, deve ter uma mensagem de erro', function() {
//         it("dado um formulario incompleto, deve ter uma mensagem de erro", function() {
//             var $scope = $rootScope.$new()
//             var controller = $controller('telaAdicionarController', { $scope: $scope });
//             $scope.adiciona_produto(false)

//             expect($scope.modal).toEqual({
//                 "titulo":"Erro ao cadastrar o produto",
//                 "descricao":"Deseja cadastrar novamente?"
//             })
//         })

//         it("dado um formulario completo, deve ter ser exibido um modal de sucesso", function() {
//             var $scope = $rootScope.$new()
//             var controller = $controller('telaAdicionarController', { $scope: $scope });
//             $scope.adiciona_produto(true)

//             expect($scope.modal).toEqual({
//                 "titulo":"Produto adicionado com sucesso",
//                 "descricao":"Deseja cadastrar outro produto?"
//             })
//         })

//         it("texto", function() {
//             var $scope = $rootScope.$new()
//             var controller = $controller('telaAdicionarController', { $scope: $scope });
//             expect($scope.titulo).toEqual("Lojinha virtual do Só Vamu")
//         })

//         it("limpa pagina", function() {
//             var $scope = $rootScope.$new()
//             var controller = $controller('telaAdicionarController', { $scope: $scope });
//             $scope.modal = {
//                 "titulo":"Produto adicionado com sucesso",
//                 "descricao":"Deseja cadastrar outro produto?"
//             }
//             var result = $scope.limpa_pagina()
//             expect($scope.produto).toEqual(result)
//         })
//     }) 







