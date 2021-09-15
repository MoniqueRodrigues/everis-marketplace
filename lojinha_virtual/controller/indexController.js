angular.module("lojaModulo")
    .controller("indexController", function ($scope, $http) {


        $scope.titulo = "Lojinha Virtual do Só Vamu";
        $scope.tituloBusca = "O que você está procurando?" //filtro(opções)
        $scope.listaProdutos = []


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
        $scope.teste=function(produto,index){
            console.log("produto", produto);
            console.log("index", index);

            $scope.produtoSelecionado = produto;
        };

        // edita produto na página principal:       
        $scope.edita_produto = function (isValid, produtoSelecionado) {
            // console.log("meu objeto", produto)
            if (isValid) {
                $http({
                    url: "http://localhost:3000/produtos/" + produtoSelecionado.id,
                    method: 'PUT',
                    data: produtoSelecionado,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(function (response) {
                    console.log(response)
                    produtoSelecionado = response.data;

                }, function (err) {
                    console.log(err)
                });

            }
        }





        //oculta produto:
        $scope.oculta_produto= function(produto){
            if(produto.quantidade === 0 || produto.valor === 0){
                console.log("card ocultado")
                              
            }



        }

      







        //switch:
        // define a visibilidade inicial
        $scope.visivel = false;
        //função para exibir o elemento
        $scope.exibir = function () {
            $scope.visivel = !$scope.visivel;
        }
    })