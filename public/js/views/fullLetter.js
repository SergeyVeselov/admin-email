define(['text!templates/fullLetter.html', 'handlebars', 'js/lib/backbone'], function (rawTemplate, handlebars) {
    return Backbone.View.extend({
        initialize: function (options) {
            this.eventBus = options.eventBus;
        },
        render: function (model) {
            var template = handlebars.compile(rawTemplate);
            this.$el.html(template(model));
            return this;
        },
        events: {
            "click .close-full-letter": function () {
                this.eventBus.trigger("closeFullLetter");
            }
        }
    });
});