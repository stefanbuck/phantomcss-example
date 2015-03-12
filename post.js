'use strict';

casper.then( function checkScreenshot() {
  phantomcss.compareAll();
});

casper.then( function endIt() {
  casper.test.done();
});

casper.run(function exitIt() {
  phantom.exit(phantomcss.getExitStatus());
});
