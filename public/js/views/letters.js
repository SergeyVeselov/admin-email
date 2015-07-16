var app = app || {};
app.LettersView = Backbone.View.extend({
    el: 'body',
    initialize: function () {
        this.listenTo(app.letters, 'add', this.addOne)
    },
    addOne: function (letter) {
        var letterView = new app.LetterView({model: letter});
        this.$('#mail-list').append(letterView.render().el);
    }
});

