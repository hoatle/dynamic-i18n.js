//I18n-ize simple string example

var i18n = require('dynamic-i18n');

var msg = i18n._('hello world').translate();

//output depends on locale context
//if English:
//            hello world!
//if Vietnamese:
//            Xin chào thế giới!



