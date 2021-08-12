angular.module("helloWorld", []); //criando o modulo

// localiza o modulo
angular.module("helloWorld").controller("helloWorldCtrl", function($scope){


    $scope.mostrarAlert= function(){
        $scope.message = "Hello World !!!"
    }


}); 
