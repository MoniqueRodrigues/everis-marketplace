angular.module("lojaModulo", ['cur.$mask']);
angular.module("lojaModulo").controller("indexController", function ($scope) {


    $scope.titulo = "Lojinha Virtual do Só Vamu";

    $scope.produto = {
        "produto": "",
        "descricao": "",
        "valor": "",
        "quantidade": 0
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

    //busca e filtragem
    $scope.listaProdutos = [{
            produto: "sabão em pó",
            descricao: "bababababa",
            valor: "R$150,00"
        },
        {
            produto: "amaciante",
            descricao: "bebebebebe",
            valor: "R$160,00"
        },
        {
            produto: "detergente",
            descricao: "bibibibibi",
            valor: "R$170,00"
        },
        // {produto: "Vassoura",descricao: "bibibibibi", valor:"R$170,00"},

    ];






})