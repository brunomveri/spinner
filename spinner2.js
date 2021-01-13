const spinner2 = function() {
  const charArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n'];
  let delayTime = 100;
  for (let i = 0; i < charArr.length; i++) { 
    setTimeout(() => {
      process.stdout.write(charArr[i]);
    }, delayTime);
    delayTime += 200;
  }
};






//Trying with recursion (unfinished)
//spinner2();

// function spinnerV2 (n=5,charArr = ['\r1   ', '\r2   ', '\r3   ', '\r4   ', '\r5   ']) {
//   if (n >= 0) {
//     spinnerV2(n-1, charArr);
//     console.log(charArr[n]);
//   }
// }
// spinnerV2();