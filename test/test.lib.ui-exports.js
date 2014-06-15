
var ui = require('../lib/ui-exports'),
    Suite = require('mocha/lib/suite'),
    should = require('should');

module.exports = {
  "mocha-ui-exports/lib/ui-exports" : {
    "special attribute: beforeAll  should attach beforeAll  handler" : testHandlerAttributeFactory("beforeAll" , "beforeAll"  ),
    "special attribute: setup      should attach beforeAll  handler" : testHandlerAttributeFactory("setup"     , "beforeAll"  ),
    "special attribute: before     should attach beforeEach handler" : testHandlerAttributeFactory("before"    , "beforeEach" ),
    "special attribute: beforeEach should attach beforeEach handler" : testHandlerAttributeFactory("beforeEach", "beforeEach" ),
    "special attribute: after      should attach afterEach  handler" : testHandlerAttributeFactory("after"     , "afterEach"  ),
    "special attribute: afterEach  should attach afterEach  handler" : testHandlerAttributeFactory("afterEach" , "afterEach"  ),
    "special attribute: afterAll   should attach afterAll   handler" : testHandlerAttributeFactory("afterAll"  , "afterAll"   ),
    "special attribute: teardown   should attach afterAll   handler" : testHandlerAttributeFactory("teardown"  , "afterAll"   ),
    "special attribute: pend should mark the suite pending" : testPendingSuite("pend", true),
    "special attribute: skip should mark the suite pending" : testPendingSuite("skip", true),
    "special attribute: timeout" : {
      'suite with key \'timeout\'': {
        'with numeric value' : {
          'should call this.timeout(..) on the suite with the numeric value' : testTimeoutValueFactory(42,42)
        },
          'with string value usign postfix' : {
          "'ms' should call this.timeout(..) on the suite with the numeric part of the value" : testTimeoutValueFactory("43ms", 43),
          "'s' should parsed as second" : testTimeoutValueFactory("0.42s", 420),
          "'m' should parse as minutes" : testTimeoutValueFactory("0.1m", 6000),
          "'h' should parse as hours"   : testTimeoutValueFactory("1h", 1000 * 60 * 60 ),
          "that is not supported should throw" : function(){
              should( testTimeoutValueFactory("0x", 6000) ).throw( /wrong format in timeout specification/ );
          }
        }
      }
    }
  }
};

function suiteFactory( block ) {
    var suite = new Suite("no-such-suite", {});
    ui(suite);
    suite.emit('require', block, 'no-such-file.js', {});
    return suite;    
}

function testHandlerAttributeFactory(handler, wireTo) {
    return function() {
        var fn = function() {},
            suite = { 'test' : function() {} };

        suite[handler] = fn;
        suite = suiteFactory(suite); 
        
        suite["_" + wireTo ].length.should.equal(1);
        suite["_" + wireTo ][0].fn.should.equal(fn);
    }
}

function testPendingSuite(attribute, expect) {
    return function() {
        var suite = { 
          'test1' : function() { /* 1 */ },
          'test2' : function() { /* 2 */ },
          "subsuite" : {
            'subtest1' : function() { /* s1 */ },
            'subtest2' : function() { /* s2 */ }
          }
        };
        suite[attribute] = true;
        suite = suiteFactory(suite);

        testSuite(suite);
    }
    function testSuite(suite) {
        suite.should.have.property("pending",expect);
        suite.tests.forEach(function(test){
            test.should.have.property('pending', expect);
        });
        suite.suites.forEach(testSuite);
    }
}


function testTimeoutValueFactory(value, expected) {
    return function() {
        var suite = suiteFactory({
          'some test with timeout' : {
            timeout: value,
            'test' : function() {}
          }
        }); 
        
        suite.suites.length.should.equal(1);
        suite.suites[0]._timeout.should.equal(expected);
    }
}