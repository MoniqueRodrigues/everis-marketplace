angular.module("lojaModulo", ['cur.$mask']);
angular.module("lojaModulo").controller("indexController", function ($scope, $http) {

    //lista produto:
    $http.get("http://localhost:3000/produtos")
        .then(function (response) {
            $scope.listaProdutos = response.data;
        });

    //deleta produto:
    $scope.exclui_produto = function (id) {
        $http.delete("http://localhost:3000/produtos/"+id)
    }


    //adiciona produto:
    $scope.adiciona_produto = function () {        
        $http({
            method: 'POST',
            url:"http://localhost:3000/produtos",
            data: JSON.stringify($scope.produto)
          })
          .then(function (response) {          
            $scope.listaProdutos.push(response.data)
          })      
               

    }



    $scope.titulo = "Lojinha Virtual do Só Vamu";

    $scope.produto = {
        "id": 0,
        "nome": "",
        "descricao": "",
        "valor": "",
        "quantidade": ""
    }


    //switch
    // define a visibilidade inicial
    $scope.visivel = false;
    //função para exibir o elemento
    $scope.exibir = function () {
        $scope.visivel = !$scope.visivel;

    }

    //filtro(opções)
    $scope.tituloBusca = "O que você está procurando?"

    

    $scope.limpaForm = function () {

        $scope.produto = {
            "id": 0,
            "produto": "",
            "descricao": "",
            "valor": "",
            "quantidade": 0
        }

    }






})



//busca e filtragem
    // $scope.listaProdutos = [{
    //         produto: "sabão em pó",
    //         descricao: "bababababa",
    //         valor: "R$150,00"
    //     },
    //     {
    //         produto: "amaciante",
    //         descricao: "bebebebebe",
    //         valor: "R$160,00"
    //     },
    //     {
    //         produto: "detergente",
    //         descricao: "bibibibibi",
    //         valor: "R$170,00"
    //     },
    //     // {produto: "Vassoura",descricao: "bibibibibi", valor:"R$170,00"},

    // ];