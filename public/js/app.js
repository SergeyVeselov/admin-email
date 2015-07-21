define(['js/lib/backbone', 'js/views/letters', 'js/collections/letters'], function(Backbone, LettersView, Letters) {
    $(function () {
        var eventBus = {};
        _.extend(eventBus, Backbone.Events);
        var lettersView = new LettersView({eventBus: eventBus});
        var letters = new Letters();
        lettersView.listenTo(letters, 'add', lettersView.addOne);
        Backbone.listenTo(eventBus, 'showLetter', function() {
            console.log("showLetter triggered")
        });
        letters.fetch();
    });
});