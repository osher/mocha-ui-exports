module.exports = 
{ "disabling tests - " : 
  { "ways to describe a TEST as pending" :
    { "use null value" : null
    , "use false value" : false
    , "use undefined value" : undefined
    , "the trick : 'skip' < ... makes it false" :  "skip" < function() {} 
    , "the trick : 'skip' | ... makes it falsy too" :  "skip" | function() {} 
    , "string is - treated as comment why pending " : "comment"
    , "the trick : 'comment' ||... makes it a string comment" :  "comment" || function() {} 
    }
  , "ways to describe a SUITE with all it's sub-suites as pending" : 
    { "pending/skipped suite 1" : 
      { skip: true
      , "test1 in a pending suite" : function() {}
      , "test2 in a pending suite" : function() {}
      , "sub-suite in a pending suite" : 
        { "test 1 in subsuite in pending suite 1" : function(){}
        , "test 2 in subsuite in pending suite 1" : function() {}
        }
      }
    , "pending/skipped suite 2" :
      { pend: true
      , "test 1 in pending suite 2" : function() {}
      }
    , "pending/skipped suite 3 (interperted as pending test)" :{}
    , "pending/skipped suite 4 (interperted as pending test)" : { pend: true }
    , "pending/skipped suite 5 (interperted as pending test)" : { skip: true }
    }
  , "and suites after are still working" :
    { "a test that runs" : function() {}
    }
  }
}