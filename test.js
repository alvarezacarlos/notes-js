async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("I love You !!"), 3000)
  });

  let result = await myPromise;  
  // console.log(result)
  return result;
}

myDisplay().then(result => console.log(result))

// The two arguments (resolve and reject) are pre-defined by JavaScript.
// We will not create them, but call one of them when the executor function is ready.
// Very often we will not need a reject function.