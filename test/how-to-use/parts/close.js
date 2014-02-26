var Should = require('should');
var DAL = [1,2];

module.exports = function(oCase) {
    o = {};
    o[ oCase.title + " --> " + oCase.expect] = function() {
        //suppose we take a value from some calculation layer or DAL
        var value = DAL.shift();
        if (typeof value != 'undefined') {
            value.should.equal(oCase.expect);
        }else{
            Should.strictEqual(oCase.expect, undefined);
        }
        
    }
    return o;
}
