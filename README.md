# Dynamic I18N for node.js

## Usage:

* Simple string:

```js

var i18n = require('dynamic-i18n');

var message = i18n._('hello world!').translate();

//output depends on locale context
//if English:
//            hello world!
//if Vietnamese:
//            Xin chào thế giới!

```

* Plural context:

```js
var i18n = require('dynamic-i18n');

var numberOfFiles = 5;

var msg = i18n._('{num_files, plural, ' +
                  '=0 {There are no files.} ' +
                  '=1 {There is one file.} ' +
                  '=other {There are # files.}' +
                 '}').
               appendArgument('num_files', numberOfFiles).
               translate();

//output depends on locale context
//if English:
//            There are 5 files.
//if Vietnamese:
//            Có 5 tệp tin.

```

















