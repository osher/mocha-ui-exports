module.exports = 
{ "reusing test code" :
  { "if a module returns a suite - just require it as a value" : require('./parts/part1')
  , "the part can be required again and it will run again" : require('./parts/part1')
  , "you can do other things in between like interacting with a common module" : 
    { "but you have to do it in a suite, to preserve order of execution" :
      function() {
        //Suppose we're interacting with common module
      }
    , "are executed before" : { "subsuites" : function() {} }
    , "that's because tests in a suite" : function() {}
    }
  , "and require the suite again and it will run again" : require('./parts/part1')
  }
, "reusing test code with context" : 
  { "in this case - we have to have a closure function and give it parameters" : 
    { "1 - first" : require('./parts/close')( { expect : 1, title: "first" } )
    , "2 - second" : require('./parts/close')( { expect : 2, title: "second" } )
    , "3 - undefined" : require('./parts/close')( { expect : undefined, title: "undefined" } )
    }
  }
}