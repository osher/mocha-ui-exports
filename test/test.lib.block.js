module.exports = 
{ "mocha-ui-exports/lib/block" :
  { "should be exposed as context.block" : function() {
        block.should.equal( require('../lib/block') )
    }
  , "should be a function that names 1 argument - a block handler" : function() {
        block.should.be.type('function');
        block.length.should.equal(1);
    }
  , "should execute the handler it is provided" : function(){
        var executed = false;
        block(function(){ executed = true } );
        executed.should.be.true;
    }
  , "should throw when provided anything that is not a function" : 
     (function() {
        var suite = {};
        [0, 1, -1, "s", NaN, {}, null, undefined, true, false, new Date()].forEach(function(param) {
            suite[ (typeof param) + " as " + param + " - throws 'Wrong argument to function block(1)'"] = 
              function() { 
                  ( function(){ block(param) } ).should.throw(/Wrong argument to function block/);
              }
        });
        return suite;
      })()
  }
}