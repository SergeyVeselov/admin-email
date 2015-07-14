var express = require('express');
var _ = require('underscore');
var app = express();
app.use(express.static('public'));

var inputLetters = [
    {
        id: 1,
        sender: "Homer Simpson",
        title: "Doh!",
        text: "Why you little!"
    },
    {
        id: 2,
        sender: "Bart Simpson",
        title: "Caramba!",
        text: "Eat my shorts!"
    }
];

app.get('/letters/', function (req, res) {
    res.send(JSON.stringify(inputLetters.map(function (letter) {
        delete letter['text'];
        return letter;
    })));
});

app.get('/letters/*', function (req, res) {
    var id = parseInt(req.path.split('/')[2]);
    var letter = _.find(inputLetters, function (checkingLetter) {
        return checkingLetter.id === id;
    });
    res.send(JSON.stringify(letter));
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)
});
