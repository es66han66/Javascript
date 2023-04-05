//this with arrow function

const obj = {
  name: "test",
  prop: {
    name: "prop name",
    print: function () {
      console.log(this.name);
    },
  },
  print: function () {
    console.log(this.name);
  },
  print2: () => console.log(this.name, this),
};

obj.print(); //ans: test
obj.prop.print(); //ans: prop name
obj.print2(); //ans: undefined, window global object
