angular.module("lojaModulo")
    .controller("indexController", function ($scope, $http) {

        $scope.titulo = "Lojinha Virtual do Só Vamu";
        $scope.tituloBusca = "O que você está procurando?" //filtro(opções)
        $scope.listaProdutos = [];



        $scope.listaValor = function (lista) {
            return parseFloat(lista.valor);
        }





        //lista produto na página principal:
        $http.get("http://localhost:3000/produtos")
            .then(function (response) {
                $scope.listaProdutos = response.data;

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
                    $('#modalEditarSucesso').modal('show');

                }).catch(function (err) {
                    console.log("erro ao editar", err)
                  $('#modalEditarErro').modal('show');


                }  )

            }else{
                $('#modalEditarErro').modal('show');                

            }
            
        };


        
        // deleta produto:
        $scope.deletaProduto = function (produto) {
            $http({
                url:"http://localhost:3000/produtos/" + produto.id,
                method: 'DELETE',
                data: produto,
                headers: {
                    "Content-Type": "application/json"
                }

            }).then(function(response){
                console.log("dados deletados com sucesso", response)
                produto = response.data;




            }).catch(function(erro){
                console.log("erro ao deletar", erro )


            })
            
            
         
        }























        //switch:
        // define a visibilidade inicial
        $scope.visivel = false;
        //função para exibir o elemento
        $scope.exibir = function () {
            $scope.visivel = !$scope.visivel;
        }



    



        // carrega página principal:
        $scope.carrega_pagina = function () {
            return window.location.replace('http://127.0.0.1:5500/html/index.html');

        }

        // EDITAR fecha modal sucesso/erro:
        $scope.modal_fechar = function () {
            var modalEditar = document.getElementById('editaModal').style.display = 'none';
            console.log("modalEditar:", editaModal);
            //carrega a página. 
            // window.location.replace('http://127.0.0.1:5500/html/index.html');
            $scope.carrega_pagina();
        };




        


























    })