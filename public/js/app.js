define(['js/lib/backbone', 'js/views/letters', 'js/collections/letters'], function(_, LettersView, Letters) {
    $(function () {
        var lettersView = new LettersView();
        var letters = new Letters();
        lettersView.listenTo(letters, 'add', lettersView.addOne);
        letters.fetch();
    });
});