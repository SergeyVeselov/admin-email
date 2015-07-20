define(['text!templates/letter.html', 'handlebars', 'js/lib/backbone'], function(letterTemplate, handlebars) {
    return Backbone.View.extend({
        render: function () {
            var template = handlebars.compile(letterTemplate);
            this.$el.html(template(this.model.attributes));
            return this;
        }
    });
});