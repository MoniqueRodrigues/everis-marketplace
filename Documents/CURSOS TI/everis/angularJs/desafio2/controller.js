angular.module("lojaModulo",[]);
angular.module("lojaModulo").controller("indexController",function($scope){
    

$scope.titulo="Lojinha Virtual do Só Vamu";
$scope.busca= "O que você está procurando?";


$scope.listaProdutos = [
    {produto: "sabão em pó",descricao: "bababababa", valor:"R$150,00"},
    {produto: "amaciante",descricao: "bebebebebe", valor:"R$160,00"},
    {produto: "detergente",descricao: "bibibibibi", valor:"R$170,00"},
    {produto: "Vassoura",descricao: "bibibibibi", valor:"R$170,00"},

];

})

