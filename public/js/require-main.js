requirejs.config({
    baseUrl: "",
    paths: {
        text: "js/lib/require/plugins/text",
        "handlebars": "js/lib/handlebars"
    },
    shim: {
        handlebars: {
            exports: 'Handlebars'
        }
    }
});

requirejs(["js/lib/jquery",
    "js/lib/underscore",
    "js/lib/backbone"], function () {
    requirejs(["js/models/letter",
        "js/collections/letters"], function () {
        requirejs(["js/views/letter",
            "js/views/letters",
            "js/app",
            "text"]);
    });
});

var app = app || {};
requirejs(["handlebars", "text!templates/letter.html"], function (_handlebars, letterTemplate) {
    app.templates = {};
    app.templates.letter = _handlebars.compile(letterTemplate);
});

