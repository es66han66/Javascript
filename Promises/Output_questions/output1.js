const promise = new Promise(function (resolve, reject) {
  const string1 = "geeksforgeeks";
  const string2 = "geeksforgeeks";
  if (string1 === string2) {
    console.log("!!!!!!!!!!!!")
    resolve();
  } else {
    console.log("!!!!!!!!!!! 88")
    reject();
  }
});

promise
  .then(function () {
    console.log("Promise resolved successfully");
    Promise.resolve(10).then((d) => {
      console.log("50");
      console.log(d);
    })
  })
  .catch(function (d) {
    console.log("Promise is rejected ",d);
  });
