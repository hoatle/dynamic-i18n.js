// I18n-ize plural context example

var i18n = require('dynamic-i18n');

var numberOfFiles = 5;

var msg = i18n._('{num_files, plural, ' +
                  '=0 {There are no files.} ' +
                  '=1 {There is one file.} ' +
                  '=other {There are # files.}' +
                 '}').
               appendArgument('num_files', numberOfFiles).
               translate();


