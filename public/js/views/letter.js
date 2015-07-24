define(['text!templates/letter.html', 'handlebars', 'js/lib/backbone'], function (letterTemplate, handlebars) {
    return Backbone.View.extend({
        initialize: function (options) {
            this.eventBus = options.eventBus;
        },
        render: function () {
            var template = handlebars.compile(letterTemplate);
            this.$el.html(template(this.model.attributes));
            return this;
        },
        events: {
            "click .letter-preview": function () {
                this.eventBus.trigger("showLetter", this.model.attributes);
            }
        }
    });
});