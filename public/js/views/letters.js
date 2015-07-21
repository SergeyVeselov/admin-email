define(['js/lib/backbone', 'js/views/letter'], function (_, LetterView) {
    return Backbone.View.extend({
        initialize: function (options) {
            this.eventBus = options.eventBus;
        },
        el: 'body',
        addOne: function (letter) {
            var letterView = new LetterView({model: letter, eventBus: this.eventBus});
            this.$('#mail-list').append(letterView.render().el);
        }
    });
});
