module.exports = 
{ "basics" :
  { "a flat suite is described by simple object with titles as kes and test-functions as values" : 
    { "a test that" : function() {}
    , "an async test" : function(done) { done() }
    }
  , "suites can be nested - by providing a suite object instead of a function" :
    { "a test that" : function() {}
    , "an async test" : function(done) { done() }
    , "a nested suite" : 
      { "a test" : function() {}
      , "another test" : function() {}
      }
    }
  , "you can enclose a context for a suite by using block(func(){}) with a function that returns the suite" :
    block( function(){
        var person = { name: "john", lname: "doe" };

        return {
          "name should be john" : function() { 
              person.name.should.equal("john"); 
          } 
        , "lname should be doe" : function() {
              person.lname.should.equal("doe");
          }
        , "sub-block (person2 example)" :
          block(function(){
              var person2 = { name: "sara", lname: "shara" };
              return {
                "sara and john are not the same" : function() {
                    person2.should.not.equal(person);
                }
              }
          })
        }
    })
  , "one-time setup function is passed using 'beforeAll'" :
    block( function() {
      var beforeAll = 0;
      return { 
        beforeAll: 
        function(){
          beforeAll++;
        }
      , "before all should be called before tests in it's block" : 
        function() {
          beforeAll.should.equal(1);
        }
      , "before all should be called only once for all tests in it's block" : 
        function() {
          beforeAll.should.equal(1);
        }
      }
    })
  , "a setup function that is called before each test is passed using 'before'" :
    block( function() {
      var before = 0;
      return { 
        before: 
        function(){
          before++;
        }
      , "before should before tests in it's block" : 
        function() {
          before.should.equal(1);
        }
      , "before should be called only once for all tests in it's block" : 
        function() {
          before.should.equal(2);
        }
      }
    })
  , "example of a suite that uses all flow hooks - beforeAll, before, after, afterAll" :
    block( function() {
      var calls = []
      return {
        "subsuite" :
        { beforeAll: function() {
            calls.push("beforeAll");
          }
        , before: 
          function() {
            calls.push("before");
          }
        , after: 
          function() {
            calls.push("after");
          }
        , afterAll: 
          function() {
            calls.push("afterAll");
          }
        , "test 1" : 
          function() {
            calls.push("test 1");
          }
        , "test 2" : 
          function() {
            calls.push("test 2");
          }
        }
      , "tests" : 
        { "beforeAll should be called only once and first" :
          function() {
            calls.filter(function(e){ return e == "beforeAll" }).length.should.equal(1);
            calls[0].should.equal("beforeAll");
          }
        , "afterAll should be called only once, and last" :
          function() {
            calls.filter(function(e){ return e == "afterAll" }).length.should.equal(1);
            calls[calls.length - 1].should.equal("afterAll");
          }
        , "every test should be preceded with 'before' and precede 'after'" :
          function() {
            calls.toString().should.equal( 
              [ "beforeAll"
              ,   "before"
              ,     "test 1"
              ,   "after"
              ,   "before"
              ,     "test 2"
              ,   "after"
              , "afterAll"
              ].toString() 
            );
          }
        }
      }
    })
  }
}