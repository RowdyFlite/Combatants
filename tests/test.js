const chai = require('chai');
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;

const combat = require('../src/combat');

describe('Combat', function() {
  describe('#Constructor', function() {
    it('should not throw exception', function() {
      combat().round.should.equal(combat().round);
    });
  });
});