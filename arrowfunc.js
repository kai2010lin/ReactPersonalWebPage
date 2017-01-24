var name = ['1', '2', '3'];

name.forEach(function(name){
  console.log('ForEach', name);
})

name.forEach((name) => {
  console.log('arrow', name);
})

name.forEach((name) => console.log('arrowshorter', name));

var returnME = (name) => name + '!';//()=> works just like a function, return what is in behind

console.log(returnME('Kai'));

//this binding of arrow is its parent, annooyous function's this refer to itself

var ob1 = {
  FullName: "Kai",
  Greet:  function (){
    name.forEach(function(name){
      console.log(this.FullName + ' says hi to ' + name);
    })
  }
}

ob1.Greet();

var ob2 = {
  FullName: "Kai",
  Greet:  function (){
    name.forEach((name) => {
      console.log(this.FullName + ' says hi to ' + name);
    })
  }
}

ob2.Greet();

var ob3 = {
  FullName: "Kai",
  Greet:  function (){
    name.forEach((name) => {
      console.log(this.FullName + ' says hi to ' + name);
    })
  }
}

ob3.Greet.call(ob3);

function add (a, b){
  return a + b;
}
console.log(add(1, 3));
console.log(add(2, 4));

var func1 = (a, b) => {return a + b}
var func2 = (a, b) => a + b;
console.log(func1(2,2));
console.log(func2(4,4));
