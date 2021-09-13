angular.module("lojaModulo")
    .controller("indexController", function ($scope, $http) {

        
        $scope.titulo = "Lojinha Virtual do Só Vamu";
        $scope.tituloBusca = "O que você está procurando?" //filtro(opções)



        //deleta produto:
        // $scope.exclui_produto = function (id) {
        //     $http.delete("http://localhost:3000/produtos/" + id)
        // }



        //lista produto na página principal:
        $http.get("http://localhost:3000/produtos")
            .then(function (response) {
                $scope.listaProdutos = response.data;
            });




        //edita produto na página principal:   
        //chamar o serviço, recuperar as informações e exibir elas

        var uri= "http://localhost:3000/produtos";
        var vm = this;
        vm.listaProdutos = [];


        $http.get(uri)
        .then(function (response) {
            vm.listaProdutos = response.data;

        });
                
     

        
       






        //switch:
        // define a visibilidade inicial
        $scope.visivel = false;
        //função para exibir o elemento
        $scope.exibir = function () {
            $scope.visivel = !$scope.visivel;
        }
    })