mocha-ui-exports [![Build Status](https://secure.travis-ci.org/osher/mocha-ui-exports.png?branch=master)](http://travis-ci.org/osher/mocha-ui-exports)
===

A export-style UI for mocha. One that ***Rocks!***

Why? whats wrong with the built-in exports?
---
 * it does not allow deffinition of timeouts for suites (and why should I do it in every test function)
 * it does not allow string values as comments for pending test-titles
 * it ignores pending / suspended tests or suites : does not count them and does not include them in the report

Isn't that a pitty...
No wonder that everybody resorts to the BDD `define(function(){ })` style and put up with the scuffold it puts on.
I mean, I just want to define a suite, it does not even have it's own scope, why must I have to declare a function for it (one that helplessly becomes a closure)?

What else?
---
 * added a utility for readability - `block( fHandler )` that allows to declare variables local to the suite
   the following way:

```
module.exports = 
{ "my cool module" : 
  block( function() {
    var localvar = "local";

    return { 
      "test that foo "  : function() { ... },
      "test that bar "  : function() { ... }
    }
  })
}
```

basically it's the equivalent of 

```
module.exports = 
{ "my cool module" : 
  ( function() {
    var localvar = "local";

    return { 
      "test that foo "  : function() { ... },
      "test that bar "  : function() { ... }
    }
  })()
}
```

But I find the first variant more readable.


I also expose for you the lib `should` as a require context variable named `Should`, so you don't have to require it for `exists`, `throws`, and other static asserters available on it.

Maybe it should be `SHOULD` if to take the GLOBALS convention. 
...I'm not sure about this part - I can even be convinced to remove it, but for now, this is how we work.

Installation
---

```
npm install mocha-ui-exports --save-dev
```

like, duh...? ;)

(oh, `--save-dev` is just an option, however, I don't think you want your users to install it... ) 


Test
---

```
mocha
```

like, duh...? ;)

(oh, well, maybe I could optimize the package with `.npmignore`, but it's only few not so big files, and it's anyway meant to be installed only on dev envs... so... 
besides, should I force you to use git to be able to  run the tests? )

Contribution
---
1. through pull-requests.
2. Please run the tests before you submit
3. If you find a bug of case that is not covered in a test - please add the test as well as solving it.

like, duh...? ;)

(oh, I repeat myself when under stress... but I promise to behave, really.)

Docs
---
Currently, the docs are in form of self-explanatory BDD tests. 

Don't be afraid of the code.

Here : [./test/how-to-use](https://github.com/osher/mocha-ui-exports/tree/master/test/how-to-use)


And I have to ask your pardon - most of the references are more clear by reading the code, but some are clearer by reading the outpot of the `spec` reporter.
So you should read both.

```
mocha test/how-to-use
```

like, duh...? ;)


Lisence
---
MIT

Have fun, really.
