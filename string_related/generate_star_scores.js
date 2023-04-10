const StartScore = (rate) => "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
const start = StartScore(3);
console.log(start); // ★★★☆☆
