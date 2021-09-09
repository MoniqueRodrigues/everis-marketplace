angular.module("lojaModulo")
    .controller("telaAdicionarController", function ($scope, $http) {

        $scope.produto = {
            "id": 0,
            "nome": "",
            "descricao": "",
            "valor": "",
            "quantidade": ""
        }


        //conteúdo modais:
        const modalSucesso = {
            "titulo": "Produto adicionado com sucesso",
            "descricao": "Deseja cadastrar outro produto?"
        }
        const modalErro = {
            "titulo": "Erro ao cadastrar o produto",
            "descricao": "Deseja cadastrar novamente?"
        }

        $scope.titulo = "Vamu que vamu"


        //adiciona produto:
        // $scope.adiciona_produto = function ($event, isValid) {
        //     if (isValid) {
        //         $http({
        //             method: 'POST',
        //             url: "http://localhost:3000/produtos",
        //             data: JSON.stringify($scope.produto)
        //         }).then(function (response) {
        //             $scope.listaProdutos.push(response.data);
        //             return
        //         })
        //         $scope.modal = modalSucesso;
        //     } else {
        //         $scope.modal = modalErro;
        //     }
        // }



        //teste:

        //adiciona produto:
        $scope.adiciona_produto = function ($event, isValid) {
            if (isValid) {
                $http({
                    method: 'POST',
                    url: "http://localhost:3000/produtos",
                    data: JSON.stringify($scope.produto)
                }).then(function (response) {
                    $scope.listaProdutos.push(response.data);                 
                    
                });  
                $scope.modal = modalSucesso;
            } else {
                $scope.modal = modalErro;
            }
        }

        
        //dispara modal:     
        // $scope.open = function () {
        //     var disparaModal = $modal.open({
        //         templateUrl: 'modal.html',
        //         controller: 'telaAdicionarController'
        //     })
        //     $scope.modal = modalSucesso;

        // };










    }
    )