'use strict';

casper.start('https://github.com/login');

casper.then(function() {
  phantomcss.screenshot('body', 'login');
});

casper.test.done();
