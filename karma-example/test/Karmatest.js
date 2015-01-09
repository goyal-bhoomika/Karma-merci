var assert = chai.assert;
var should = chai.should();// node.js core module

describe('Array', function(){
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function (){
      assert.equal(-1 , [1,2,3].indexOf(4)); // 4 is not present in this array so indexOf returns -1
    }),
     it('should return >=0 when the value is present', function (){
      assert.notEqual(-1, [1,2,3].indexOf(3)); // 4 is not present in this array so indexOf returns -1
    })
  })
})