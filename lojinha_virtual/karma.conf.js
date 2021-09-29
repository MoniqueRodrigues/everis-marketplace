module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'lojinha_virtual/controller/telaAdicionarController.js', 
            'lojinha_virtual/testes/telaAdicionar.spec.js'    
                 
        ],
        exclude: [],
        preprocessors: {},
        reporters: ['progress'],
        port: 9876,
        hostname: 'localhost',
        listenAddress: 'localhost',
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    })
}