mocha-ui-exports - a export-style UI for mocha
===

Why? whats wrong with the built-in exports?
---
 * it does not support timers
 * it does not support comments
 * it ignores count pending / suspended tests or suites

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

I also expose for you the lib `should` as a require context variable named Should, so you don't have to require it for `exists`, `throws`, and other static asserters available on it.
I'm not sure about this part - I can be convinced to remove it, but for now, this is how we work.

Docs
---
I beg your pardon for not givng too much docs here, will do it later.

Currently, the docs are in form of BDD tests, here :
[./test/how-to-use](https://github.com/osher/mocha-ui-exports/tree/master/test/how-to-use)

