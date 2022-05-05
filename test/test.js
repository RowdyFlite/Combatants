const chai = require('chai');
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;

const combat = require('../src/combat');

describe('Combat', function() {
  describe('#Constructor', function() {
    it('should not throw exception', function() {
      let c = new combat.Combat();
      should.exist(c);
      should.not.equal(c, null);
      c.round.should.equal(1);
    });
  });
});