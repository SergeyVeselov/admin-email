describe('Mail list', function () {
    it('should have correct number of letters', function () {
        browser.ignoreSynchronization = true;
        browser.get('http://127.0.0.1:3000/index.html');
        browser.wait(function () {
            return element.all(by.css("#mail-list div")).count(function (number) {
                return number === 2
            }());
        }).then(function () {
            var senders = element.all(by.css('#mail-list .sender')).map(function(elm) {
                return elm.getText();
            });
            expect(senders).toEqual(["Homer Simpson", "Bart Simpson"]);
        });
    });
});
