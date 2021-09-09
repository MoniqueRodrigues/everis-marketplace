angular.module("lojaModulo")
       .controller("indexController", function ($scope, $http) {
    

    //deleta produto:
    $scope.exclui_produto = function (id) {
        $http.delete("http://localhost:3000/produtos/" + id)
    }

    //lista produto:
    $http.get("http://localhost:3000/produtos")
         .then(function (response) {
            $scope.listaProdutos = response.data;
    });


    $scope.titulo = "Lojinha Virtual do Só Vamu";
    $scope.tituloBusca = "O que você está procurando?" //filtro(opções)


    //switch
    // define a visibilidade inicial
    $scope.visivel = false;
    //função para exibir o elemento

    $scope.exibir = function () {
        $scope.visivel = !$scope.visivel;
    }
})