var validations = require('../');
var assert = require('assert');

describe('validations', function() {
  it('should validate field presence', function(done) {
    var errors = [];
    var foo = validations.present("name", { foo: 'bar'}, errors, function() {
      assert.ok(errors[0] === 'must be present');
      done();
    });
  });
  it('should validate field presence', function(done) {
    var errors = [];
    var foo = validations.present("foo", { foo: 'bar'}, errors, function() {
      assert.ok(errors.length === 0);
      done();
    });
  });
  it('should validate field confirmation', function(done) {
    var errors = [];
    var foo = validations.confirmation("foo", { foo: 'bar'}, errors, function() {
      assert.ok(errors[0] === 'confirmation must be present');
      done();
    });
  });
  it('should validate field confirmation', function(done) {
    var errors = [];
    var foo = validations.confirmation("foo", { foo: 'bar', foo_confirmation: 'baz'}, errors, function() {
      assert.ok(errors[0] === 'confirmation must match');
      done();
    });
  });
  it('should validate field confirmation', function(done) {
    var errors = [];
    var foo = validations.confirmation("foo", { foo: 'bar', foo_confirmation: 'bar'}, errors, function() {
      assert.ok(errors.length === 0);
      done();
    });
  });
  it('should validate email', function(done) {
    var errors = [];
    var foo = validations.email("foo", { foo: 'bar@foo.com'}, errors, function() {
      assert.ok(errors.length === 0);
      done();
    });
  });
  it('should validate email', function(done) {
    var errors = [];
    var foo = validations.email("foo", { foo: 'bar'}, errors, function() {
      assert.ok(errors[0] === 'must be valid');
      done();
    });
  });

})