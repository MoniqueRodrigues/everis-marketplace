angular.module("lojaModulo")
    .controller("telaAdicionarController", function ($scope, $http) {

        $scope.titulo = "Vamu que vamu"

        // $scope.produto = limpaForm()

        //conteúdo modal sucesso ou erro:


        const modalSucesso = {
            "titulo": "Produto adicionado com sucesso",
            "descricao": "Deseja cadastrar outro produto?"
        }
        const modalErro = {
            "titulo": "Erro ao cadastrar o produto",
            "descricao": "Deseja cadastrar novamente?"
        }

        $scope.modal = modalErro;


        //adiciona produto no formulário e envia para o Banco de dados:    
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



        //modalsucesso:carrega página no botao do sim:
        $scope.limpa_pagina = function () {
            if ($scope.modal === modalSucesso) {
                limpaForm()
            }

        };

        //limpa Formulário:
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