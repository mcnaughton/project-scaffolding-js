var allTestFiles = [];
var TEST_REGEXP = /(src|dist|spec|bower_components)/i;
Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
        allTestFiles.push(normalizedTestModule);
    }
});
require.config({
    shim: {
        'src/project': {
            exports: 'project'
        }
    },
    baseUrl: '/base',
    deps: allTestFiles,
    callback: window.__karma__.start
});
