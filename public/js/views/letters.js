define(['js/lib/backbone', 'js/views/letter'], function (_, LetterView) {
    return Backbone.View.extend({
        el: 'body',
        addOne: function (letter) {
            var letterView = new LetterView({model: letter});
            this.$('#mail-list').append(letterView.render().el);
        }
    });
});
