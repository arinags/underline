var assert   = require('assert');
 
describe('first', function() {
  it('returns null when an array is not an argument', function() {
    assert.equal(_.last([]), undefined);
  });
  
 it('returns undefined when an array is empty', function() {
   assert.equal(_.last([]), undefined);
 });
 
 it('returns the first element', function() {
   assert.equal(_.last(['one', 'two']), 'one');
 });
});