var app = app || {};

$(function() {
    var lettersView = new app.LettersView();
    app.letters.fetch();
});
