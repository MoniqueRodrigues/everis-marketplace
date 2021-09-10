angular.module("lojaModulo")
    .controller("telaAdicionarController", function ($scope, $http) {

        $scope.produto = limpaForm()

        //conteúdo modais:
        const modalSucesso = {
            "titulo": "Produto adicionado com sucesso",
            "descricao": "Deseja cadastrar outro produto?"
        }
        const modalErro = {
            "titulo": "Erro ao cadastrar o produto",
            "descricao": "Deseja cadastrar novamente?"
        }

        $scope.modal = modalErro

        $scope.titulo = "Vamu que vamu"


       //adiciona produto:
        $scope.adiciona_produto = function (isValid) {
            if (isValid) {
                $http.post(
                    "http://localhost:3000/produtos", 
                    JSON.stringify($scope.produto)
                ) .then(function (response) {
                    $scope.listaProdutos.push(response.data);             
                });  
                $scope.modal = modalSucesso;
                $scope.produto = limpaForm();
            } else {
                 $scope.modal = modalErro;
            }
        }

        function limpaForm() {
            return {
                "id": 0,
                "nome": "",
                "descricao": "",
                "valor": "",
                "quantidade": ""
            }
    
        }

    }
)