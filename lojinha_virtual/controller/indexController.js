angular.module("lojaModulo")
    .controller("indexController", function ($scope, $http) {


        $scope.titulo = "Lojinha Virtual do Só Vamu";
        $scope.tituloBusca = "O que você está procurando?" //filtro(opções)
        $scope.listaProdutos = [];
      


        //deleta produto:
        // $scope.exclui_produto = function (id) {
        //     $http.delete("http://localhost:3000/produtos/" + id)
        // }



        //lista produto na página principal:
        $http.get("http://localhost:3000/produtos")
            .then(function (response) {
                $scope.listaProdutos = response.data;
                // console.log($scope.listaProdutos);
            });




        //visualizar as informações do produto no modal:
        $scope.mostraProduto = function (lista, index) {
            // console.log("produto", lista);
            // console.log("index", lista);
            $scope.produtoSelecionado = lista;
        };



        // edita produto na página principal:
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

                }, function (err) {
                    console.log("erro ao editar", err)
                });

            }
        }

        // oculta produto:
        // $scope.ocultar = function (produto) {
        //     console.log("oculta, produto")
        //     $scope.oculta = true;
        //     if (produto.valor <1 || produto.quantidade === 0) {
        //         return $scope.oculta;
        //     }

        // }


        // mostra produto:
        // $scope.mostrar = function (produto) {
        //     console.log("mostra", produto)
        //     $scope.mostra = true;
        //     if (produto.quantidade != 0 || produto.valor != 0) {
        //         return $scope.mostra;

        //     }
            

        // }












        //switch:
        // define a visibilidade inicial
        $scope.visivel = false;
        //função para exibir o elemento
        $scope.exibir = function () {
            $scope.visivel = !$scope.visivel;
        }
    })