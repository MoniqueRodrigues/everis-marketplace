module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angularjs-currency-input-mask/dist/angularjs-currency-input-mask.min.js',
            'module.js',
            'controller/telaAdicionarController.js', 
            'controller/indexController.js',
            'testes/telaAdicionar.spec.js'
                 
        ],
        exclude: [],
        //preprocessors: {},
        //reporters: ['progress'],
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'src/**/*.js': ['coverage']
        },
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },
        reporters: ['progress', 'coverage'],
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