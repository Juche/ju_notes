let person = {
  name: "John",
  getName: function () {
    // debugger;
    console.log(this.name);
  },
};

// let name = "Juching";
var name = "Juching";

let juche = {
  name: "Juche",
  age: 21,
}

window.setTimeout(person.getName, 1000); // undefined

let func = person.getName;
setTimeout(func, 1000); // undefined

let funcB = person.getName.bind(person);
setTimeout(funcB, 1000); // John

let funcC = person.getName.bind(juche);
setTimeout(funcC, 1000); // Juche
