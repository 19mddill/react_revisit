//normal Declaration
function sayHello(){
  console.log("Hello World!");
}
sayHello();

//Arrow Function
let saySomething = (name,age) => {
  console.log(name,age);
}

saySomething("Md.Dilshad",28);

let sayMyName = name => {
  console.log(name);
}

sayMyName("Md.Doll")

let callMyName = name => console.log(name);
callMyName("Harry")

let returnMyName = name => { return name};
console.log(returnMyName("Lara"));

let doubleTheNum = num => num*2;
console.log(doubleTheNum(21));