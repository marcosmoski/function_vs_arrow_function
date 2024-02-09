function foo (prop1) { 
  console.log(this)
  // shows and object global because it gets the scope from who is calling it

  console.log(arguments)
  // it shows the arguments passed, arguments is present on functions
}

foo("aaaa");