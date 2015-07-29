define(['js/lib/backbone', 'js/views/letters', 'js/collections/letters', 'js/views/fullLetter'], function (Backbone, LettersView, Letters, FullLetter) {
    $(function () {
        var eventBus = {};
        _.extend(eventBus, Backbone.Events);
        var letters = new Letters();
        var lettersView = new LettersView({eventBus: eventBus, collection: letters});
        lettersView.listenTo(letters, 'add', lettersView.addOne);
        Backbone.listenTo(eventBus, 'showLetter', function (model) {
            $('.mailbox').addClass('container-fluid');
            $('.mailbox-container').addClass('row');
            var fullLetter = $(".full-letter");
            var fullLetterView = new FullLetter({eventBus: eventBus});
            fullLetter.html(fullLetterView.render(model).el);
            fullLetter.show();
            fullLetter.addClass('col-xs-8 col-lg-6');
            $(".letter-preview-container").addClass('col-xs-4 col-lg-6');
            $(".letter").removeClass("row");
            $(".checkboxes-and-sender-name").removeClass("col-xs-8 col-sm-4");
            $(".receiving-time-container").hide();
            $(".letter-preview").removeClass("col-xs-12 col-sm-6 col-sm-pull-2 col-lg-7 col-lg-pull-1");
            $('.menu').css({'padding-right': 0});
            $('.navbar-right-container').css({'padding-right': 0});
        });
        Backbone.listenTo(eventBus, "closeFullLetter", function() {
            lettersView.render();
            $('.mailbox').removeClass('container-fluid');
            $('.mailbox-container').removeClass('row');
            $(".letter-preview-container").removeClass('col-xs-4 col-lg-6');
            $('.full-letter').hide();
            $('.menu').css({'padding-right': $('.menu').css('padding-left')});
            $('.navbar-right-container').css({'padding-right': $('.navbar-right-container').css('padding-left')});
        });
        letters.fetch();
    });
});