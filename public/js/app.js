define(['js/lib/backbone', 'js/views/letters', 'js/collections/letters'], function (Backbone, LettersView, Letters) {
    $(function () {
        var eventBus = {};
        _.extend(eventBus, Backbone.Events);
        var lettersView = new LettersView({eventBus: eventBus});
        var letters = new Letters();
        lettersView.listenTo(letters, 'add', lettersView.addOne);
        Backbone.listenTo(eventBus, 'showLetter', function () {
            $('.mailbox').addClass('container-fluid');
            $('.mailbox-container').addClass('row');
            var fullLetter = $(".full-letter");
            fullLetter.show();
            fullLetter.addClass('col-xs-8');
            $(".letter-preview-container").addClass('col-xs-4');
            $(".letter").removeClass("row");
            $(".checkboxes-and-sender-name").removeClass("col-xs-8 col-sm-4");
            $(".receiving-time-container").hide();
            $(".letter-preview").removeClass("col-xs-12 col-sm-6 col-sm-pull-2 col-lg-7 col-lg-pull-1");
        });
        letters.fetch();
    });
});