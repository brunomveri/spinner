const charArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n'];
const spinner2 = function(str, delayTime) {
  // process.stdout.write(str[0]);
  setTimeout(() => { process.stdout.write(str[0]); }, 100);
  for (let i = 0; i < str.length - 1; i++) {
    setTimeout(() => { process.stdout.write(str[i + 1]); }, delayTime += 200); //here
  }
};
spinner2(charArr, 100);