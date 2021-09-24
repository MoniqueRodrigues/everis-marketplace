angular.module("lojaModulo")
    .controller("indexController", function ($scope, $http) {

        $scope.titulo = "Lojinha Virtual do Só Vamu";
        $scope.tituloBusca = "O que você está procurando?" //filtro(opções)
        $scope.listaProdutos = [];






        //LISTA PRODUTO NA PÁGINA INICIAL:
        $http.get("http://localhost:3000/produtos")
            .then(function (response) {
                $scope.listaProdutos = response.data;

            });



        //VISUALIZA CADA PRODUTO:
        $scope.mostraProduto = function (lista, index) {
            // console.log("produto", lista);
            // console.log("index", lista);
            $scope.produtoSelecionado = lista;
        };



        // EDITA PRODUTO NA PÁGINA PRINCIPAL:
        $scope.edita_produto = function (isValid, produto) {
            // console.log("meu objeto", produto)
            // console.log("is valid?", isValid)

            if (isValid) {
                $http({
                    url: "http://localhost:3000/produtos/" + produto.id,
                    method: 'PUT',
                    data: produto,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(function (response) {
                    console.log("dados alterados com sucesso", response)
                    produto = response.data;
                    $('#modalEditarSucesso').modal('show');

                }).catch(function (err) {
                    console.log("erro ao editar", err)
                    $('#modalEditarErro').modal('show');
                })

            } else {
                $('#modalEditarErro').modal('show');
            }

        };



        //DELETA PRODUTO:
        $scope.deletaProduto = function (produto) {
            console.log(produto);


            $http({
                url: "http://localhost:3000/produtos/" + produto.id,
                method: 'DELETE',
                data: produto,
                headers: {
                    "Content-Type": "application/json"
                }

            }).then(function (response) {
                console.log("dados deletados com sucesso", response)
                produto = response.data;
                $('#modalExcluirSucesso').modal('show');


            }).catch(function (erro) {
                console.log("erro ao deletar", erro);
                $('#modalExcluirErro').modal('show');
            })
        };

        $scope.chamaModalInformativoExcluir = function () {
            $('#modalExcluirInformativo').modal('show');
            console.log("chamou");

        }




        //SWITCH:
        // define a visibilidade inicial
        $scope.visivel = false;
        //função para exibir o elemento
        $scope.exibir = function () {
            $scope.visivel = !$scope.visivel;
        }


        //CARREGA PÁGINA PRINCIPAL:
        $scope.carrega_pagina = function () {
            return window.location.replace('http://127.0.0.1:5500/html/index.html');

        }

        // EDITAR- FECHAR MODAL INFORMATIVO:
        $scope.modal_fechar = function () {          
            $('#editaModal').modal('hide');
        };

    })