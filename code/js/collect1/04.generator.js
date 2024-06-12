function* f() {
  for (var i = 0; true; i++) {
    // for(var i = 0; i < 3; i++) {
    var reset = yield i
    // if(reset == 'done') { i = -1; }
    if (reset == 'done') return 'done'
  }
}

// function* f() {
//   for (let i = 0; i < 3; i++) {
//     let _i = yield i;
//     if(_i) {
//       i = -1;
//     }
//   }
// }
var g = f()
console.log(g.next()) // { value: 0, done: false }
console.log(g.next()) // { value: 1, done: false }
console.log(g.next()) // { value: 2, done: false }
console.log(g.next(true)) // { value: 3, done: false }
console.log(g.next('done')) // { value: 'done', done: true }
console.log(g.next()) // { value: undefined, done: true }
