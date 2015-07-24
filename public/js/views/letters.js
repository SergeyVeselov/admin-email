define(['js/lib/backbone', 'js/views/letter'], function (_, LetterView) {
    return Backbone.View.extend({
        initialize: function (options) {
            this.eventBus = options.eventBus;
            this.collection = options.collection;
        },
        el: '#mail-list',
        render: function() {
            this.$el.html("");
            for(var i = 0; i < this.collection.models.length; i++) {
                var letterView = new LetterView({model:this.collection.models[i], eventBus: this.eventBus});
                this.$el.append(letterView.render().el);
            }
            return this;
        },
        addOne: function (letter) {
            var letterView = new LetterView({model: letter, eventBus: this.eventBus});
            this.$el.append(letterView.render().el);
        }
    });
});
