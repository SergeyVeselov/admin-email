var app = app || {};
var Letters = Backbone.Collection.extend({
    url: '/letters',
    model: app.Letter
});
app.letters = new Letters();

