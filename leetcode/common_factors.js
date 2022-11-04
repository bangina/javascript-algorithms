/* eslint-disable no-plusplus */
const commonFactors = function (a, b) {
  //   소인수 array *2
  //   : 반복문 - 1~n까지 나눠서 나머지 === 0 ->push
  //   반복문 - 동일한 숫자 있으면 ++1
  const aArr = [];
  const bArr = [];
  const commonArr = [];

  for (let x = 1; x < a + 1; x++) {
    if (a % x === 0) {
      aArr.push(x);
    }
  }
  for (let x = 1; x < b + 1; x++) {
    if (b % x === 0) {
      bArr.push(x);
    }
  }
  if (aArr.length < bArr.length) {
    aArr.forEach((num) => {
      if (bArr.filter((item) => item === num).length === 1) {
        commonArr.push(num);
      }
    });
  } else {
    bArr.forEach((num) => {
      if (aArr.filter((item) => item === num).length === 1) {
        commonArr.push(num);
      }
    });
  }
  return commonArr.length;
};

const commonFactors2 = function (a, b) {
  let count = 0;
  const number = Math.min(a, b);
  for (let index = 1; index < number + 1; index++) {
    if (a % index === 0 && b % index === 0) {
      count += 1;
    }
  }
  return count;
};
