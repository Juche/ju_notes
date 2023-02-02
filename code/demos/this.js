var obj = {
  name: 'obj',
  foo1: () => {
    console.log(this.name); // window
  },
  foo2: function () {
    console.log(this.name); // obj
    return () => {
      console.log(this.name); // obj
    };
  },
};
var name = 'window';
obj.foo1();
obj.foo2()();
