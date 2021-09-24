angular.module("lojaModulo")
    .controller("telaAdicionarController", function ($scope, $http) {

        $scope.titulo = "Vamu que vamu"






        //CONTEÚDO MODAL SUCESSO OU ERRO:
        const modalSucesso = {
            "titulo": "Produto adicionado com sucesso",
            "descricao": "Deseja cadastrar outro produto?"
        }
        const modalErro = {
            "titulo": "Erro ao cadastrar o produto",
            "descricao": "Deseja cadastrar novamente?"
        }

        $scope.modal = modalErro;



        // ADICIONA O PRODUTO NO FORMULÁRIO E ENVIA PARA O BANCO DE DADOS:    
        $scope.adiciona_produto = function (isValid) {
            if (isValid) {
                $http.post(
                    "http://localhost:3000/produtos",
                    JSON.stringify($scope.produto)
                ).then(function (response) {
                    $scope.listaProdutos.push(response.data);
                });
                $scope.modal = modalSucesso;

            } else {
                $scope.modal = modalErro;
            }
        }



        //MODALSUCESSO- LIMPA O FORMULÁRIO:
        $scope.limpa_pagina = function () {
            if ($scope.modal === modalSucesso) {
                limpaForm()
            }

        };


        //LIMPA O FORMULÁRIO:
        function limpaForm() {
            $scope.produto = {
                "id": 0,
                "nome": "",
                "descricao": "",
                "valor": "",
                "quantidade": ""
            };

        };


    }
    )