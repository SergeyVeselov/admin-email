define(['js/lib/backbone', 'js/views/letters', 'js/collections/letters', 'js/views/fullLetter'], function (Backbone, LettersView, Letters, FullLetter) {
    $(function () {
        const CHECKBOXES_AND_NAME_PREVIEW = 'col-xs-8 col-sm-4';
        const CHECKBOXES_AND_NAME_FULL_MESSAGE = 'col-lg-8';
        const MESSAGE_PREVIEW = 'col-xs-12 col-sm-6 col-sm-pull-2 col-lg-7 col-lg-pull-1';
        const MESSAGE_FULL_MESSAGE = 'col-lg-12';
        const TIME_PREVIEW = 'col-xs-4 col-sm-2 col-sm-push-6 col-lg-1 col-lg-push-7';
        const TIME_FULL_MESSAGE = 'col-lg-4';
        var eventBus = {};
        _.extend(eventBus, Backbone.Events);
        var letters = new Letters();
        var lettersView = new LettersView({eventBus: eventBus, collection: letters});
        lettersView.listenTo(letters, 'add', lettersView.addOne);
        Backbone.listenTo(eventBus, 'showLetter', function (model) {
            var fullLetter = $(".full-letter");
            var fullLetterView = new FullLetter({eventBus: eventBus});
            fullLetter.html(fullLetterView.render(model).el);
            fullLetter.show();

            var checkboxes = $('.checkboxes-and-sender-name');
            checkboxes.removeClass(CHECKBOXES_AND_NAME_PREVIEW);
            checkboxes.addClass(CHECKBOXES_AND_NAME_FULL_MESSAGE);
            checkboxes.css({'padding-right': 0});

            var receivingTimeContainer = $('.receiving-time-container');
            receivingTimeContainer.removeClass(TIME_PREVIEW);
            receivingTimeContainer.addClass('col-lg-4');
            receivingTimeContainer.css({'padding-left': 0});

            var letter = $('.letter-preview');
            letter.removeClass(MESSAGE_PREVIEW);
            letter.addClass(MESSAGE_FULL_MESSAGE);

            var maillist = $('#mail-list');
            maillist.css({width: '250px'});
            maillist.css({float: 'left'});

        });
        Backbone.listenTo(eventBus, "closeFullLetter", function() {
            lettersView.render();
            $('.full-letter').hide();

            var checkboxes = $('.checkboxes-and-sender-name');
            checkboxes.addClass(CHECKBOXES_AND_NAME_PREVIEW);
            checkboxes.removeClass(CHECKBOXES_AND_NAME_FULL_MESSAGE);
            checkboxes.css({'padding-right': 0});

            var receivingTimeContainer = $('.receiving-time-container');
            receivingTimeContainer.addClass(TIME_PREVIEW);
            receivingTimeContainer.removeClass(TIME_FULL_MESSAGE);
            receivingTimeContainer.css({'padding-left': 0});

            var letter = $('.letter-preview');
            letter.addClass(MESSAGE_PREVIEW);
            letter.removeClass(MESSAGE_FULL_MESSAGE);

            var maillist = $('#mail-list');
            maillist.css({width: '100%'});
            maillist.css({float: 'auto'});
        });
        letters.fetch();
    });
});