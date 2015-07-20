requirejs.config({
    baseUrl: "",
    paths: {
        text: "js/lib/require/plugins/text",
        handlebars: "js/lib/handlebars",
        underscore: "js/lib/underscore",
        jquery: "js/lib/jquery"
    },
    shim: {
        handlebars: {
            exports: 'Handlebars'
        }
    }
});

requirejs(["js/app"]);

