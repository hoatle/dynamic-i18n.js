var should = require('should');

var i18n = require('../');


describe('i18n APIs', function() {

  it('i18n.VERSION', function() {
    i18n.VERSION.should.equal('0.1.0');
  });

  it('i18n._', function() {
    i18n._.should.be.a('function');
  });

  it('i18n.messageArguments', function() {
    i18n.messageArguments.should.be.a('function');
  });

  it('i18n.appendArgument', function() {
    i18n.appendArgument.should.be.a('function');
  });

  it('i18n.locale', function() {
    i18n.locale.should.be.a('function');
  });

  it('i18n.translate', function() {
    i18n.translate.should.be.a('function');
  });

  it('i18n chaining', function() {
    i18n._().messageArguments().appendArgument().locale().translate();
  });

});





