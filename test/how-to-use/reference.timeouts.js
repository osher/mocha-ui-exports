module.exports = 
{ "setting timeouts -" :
  { "ways to describe a TIMEOUT for a TEST" :
    { "use this.timeout(miliseconds:number)" :
      function(done) {
          this.timeout(1000);
          done();
      }
    , "use this.timeout(time:string)" :
      function(done) {
          this.timeout("1m");
          this.timeout("1s");
          this.timeout("1h");
          done();
      }
    }
  , "ways to describe a TIMEOUT for all tests in a SUITE" :
    { "use attribute timeout : number - to describe millis" : 
      { timeout: 1000
      , " 1000" : function(done){ done() }
      }
    ,  "use attribute timeout : 'string' - to describe number and unit" : 
      { timeout: "1s" //supports also 1m, 1h, etc...
      , " \"1s\" " : function(done){ done() }
      }
    }
  }
}