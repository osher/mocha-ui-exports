module.exports = 
{ "order of execution" :
  { "you can organize code in parts" : require('./parts/p1')
  , "and execute them by specified order" : require('./parts/p2')
  , "as long as they are all suites" : require('./parts/p3')
  , "just mind that closures are by nature private. reporter implementations will not have access to them" : require('./parts/p1')
  }
}