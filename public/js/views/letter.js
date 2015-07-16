var app = app || {};
app.LetterView = Backbone.View.extend({
    render: function () {
        var template = app.templates.letter;
        this.$el.html(template(this.model.attributes));
        return this;
    }
});