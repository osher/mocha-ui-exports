var calls;

module.exports = 
{ beforeAll: 
  function() { 
    calls = [];
  }
, "test 1": 
  function() {
    calls.length.should.equal(0);
    calls.push("test 1");
  }
, "test 2": 
  function() {
    calls.length.should.equal(1);
    calls.push("test 2");
  }
, "test 3": 
  function() {
    calls.length.should.equal(2);
  }
}