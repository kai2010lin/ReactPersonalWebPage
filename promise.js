function addPromise (a, b) {
  return new Promise(function(resolve, reject){
    if ((typeof a === 'number') && (typeof b === 'number'))
    resolve(a + b);
    reject("data are corrupted");
  });
}

addPromise(3,4).then(function(sum){
  console.log("sum is " + sum);
}, function(err){
  console.log("error is " + err);
})

addPromise("string", "string").then(function(sum){
  console.log("sum is " + sum);
}, function(err){
  console.log("error is " + err);
});

addPromise(2).then(function(sum){
  console.log("sum is " + sum);
}, function(err){
  console.log("error is " + err);
});;
