/* global phantomcss:true */

'use strict';

var fs = require('fs');
var phantomcss = require(fs.absolute(fs.workingDirectory + '/phantomcss.js'));

phantomcss.init({
  rebase: casper.cli.get('rebase')
});
