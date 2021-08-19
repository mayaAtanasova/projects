let arr = [1, 2, 3, 4, 5, 6, -7, 293003];
let result = arr.reduce((acc, c) => acc > c ? acc : c);
console.log(result);