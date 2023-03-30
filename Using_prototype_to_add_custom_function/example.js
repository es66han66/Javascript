const radius = [3, 1, 2, 4];

Array.prototype.calculate = function (logic) {
  const output = [];

  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }

  return output;
};

function area(radius) {
  return Math.PI * radius * radius;
}

console.log(radius.calculate(area));
