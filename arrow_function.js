const foo = (prop) => { 
  console.log(this)
  // shows an empty object because it is a arrow function, its getting the this from the lexical scope, 
  // as im executing it in node, the lexical scope doesnt have any properties 

  console.log(arguments);

  // it shown the lexical scope arguments, not the arguemnts sent to the function
}

foo("aaaa")