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




        // edita produto na página principal:   
        // chamar o serviço, recuperar as informações e exibir elas
        $scope.edita_produto = function (isValid, produto) {
            console.log("meu objeto", produto)
            if (isValid) {
                $http({
                    url: "http://localhost:3000/produtos/" + produto.id,
                    method: 'PUT',
                    data: produto,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(function (response) {
                    console.log(response)                   
                    produto = response.data;              
                   
                }, function(err) {
                    console.log(err)
                });
              
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