var express = require('express');
var _ = require('underscore');
var app = express();
app.use(express.static('public'));

var inputLetters = [
    {
        id: 1,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    },
    {
        id: 2,
        sender: "Homer Simpson",
        title: "I know what you're saying, Bart.",
        text: "I know what you're saying, Bart. When I was young, I wanted an electric football machine more than anything else in the world, and my parents bought it for me, and it was the happiest day of my life. Well, goodnight."
    },
    {
        id: 3,
        sender: "Homer Simpson",
        title: "Kill myself?",
        text: "Kill myself? Killing myself is the last thing I'd ever do. Now I have a purpose, a reason to live. I don't care who I have to face, I don't care who I have to fight, I will not rest until this street gets a stop sign!"
    },
    {
        id: 4,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    },
    {
        id: 5,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    },
    {
        id: 6,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    },
    {
        id: 7,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    },
    {
        id: 8,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    },
    {
        id: 9,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    },
    {
        id: 10,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    },
    {
        id: 11,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    },
    {
        id: 12,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    },
    {
        id: 13,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    },
    {
        id: 14,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    },
    {
        id: 15,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    },
    {
        id: 16,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    },
    {
        id: 17,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    },
    {
        id: 18,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    },
    {
        id: 19,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    },
    {
        id: 20,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    },
    {
        id: 21,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    },
    {
        id: 22,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    },
    {
        id: 23,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    },
    {
        id: 24,
        sender: "Homer Simpson",
        title: "And how is education supposed to make me feel smarter?",
        text: "And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine making course, and I forgot how to drive?"
    }
];

app.get('/letters/', function (req, res) {
    res.send(JSON.stringify(inputLetters));
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
