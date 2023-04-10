const RoundNum = (num, decimal) =>
  Math.round(num * 10 ** decimal) / 10 ** decimal;
const num = RoundNum(5.78602, 2);
console.log(num); //5.79
