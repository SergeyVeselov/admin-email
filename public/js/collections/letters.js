define(['js/lib/backbone', 'js/models/letter'], function(_, Letter) {
    return Backbone.Collection.extend({
        url: '/letters',
        model: Letter
    });
});

