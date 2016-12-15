function myUniq(arr){
  let uniqValues = [];
  for (let i = 0; i < arr.length; i++){
    if(uniqValues.indexOf(arr[i]) === -1){
      uniqValues.push(arr[i]);
    }
  }
  return uniqValues;
}

function twoSum(arr){
  let sums = [];
  for(let i = 0; i < (arr.length - 1); i++){
    for(let j = (i + 1); j < arr.length; j++){
      if(arr[i]+arr[j] === 0){
        sums.push([i,j]);
      }
    }
  }
  return sums;
}

function transpose(matrix){
  let newMatrix = [];
  for(let i = 0; i < matrix.length; i++){
    let cols = [];
    for(let j = 0; j < matrix[0].length; j++){
      cols.push(matrix[j][i]);
    }
    newMatrix.push(cols);
  }
  return newMatrix;
}


// console.log(transpose([
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ]));


Array.prototype.myEach = function (callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function (callback) {
  let arr = [];
  this.myEach(el => {arr.push(callback(el));});
  return arr;
};



Array.prototype.myInject = function (callback) {
  let accumulator = this[0];
  let newArr = this.slice(1, this.length);
  newArr.myEach(el => {accumulator = callback(accumulator, el);});
  return accumulator;
};

function myAdd(a,b){
  return a + b;
}

Array.prototype.bubbleSort = function (){
  let cont = true;
  while (cont) {
    cont = false;
    for(let i = 0; i < (this.length-1);i++){
      if(this[i] > this[i+1]){
        cont = true;
        let temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
      }
    }
  }
};

String.prototype.subStrings = function(){
  let arrSubs = [];
  for(let i = 0; i < this.length; i++){
    for(let j = (i + 1); j <= this.length; j++){
      arrSubs.push(this.slice(i, j));
    }
  }
  return arrSubs;
};

// console.log("abc".subStrings());

function range(first, last) {
  if (first === last) return [first];

  return range(first, (last - 1)).concat([last]);

}

// console.log(range(3,8)); //[3,4,5,6,7,8]


function sum(arr) {
  if(arr.length === 1) return arr[0];

  return arr.shift() + sum(arr);
}

// console.log(sum([1,2,3,4]));


function exp(b,n){
  if (n === 0) return 1;

  return b * exp(b,n-1);
}

function fibonacci(n){
  if (n === 1) return [1];
  if (n === 2) return [1,1];

  let smallerFib = fibonacci(n-1);
  let fibNum = smallerFib[n-2] + smallerFib[n-3];
  return smallerFib.concat(fibNum);
}

//console.log(fibonacci(6));


function binarySearch(arr, target) {
  if (arr.length === 1) {
    if (target === arr[0]) {
      return 0;
    } else {
      return -1;
    }
  }
  if (arr.length === 0) {return -1;}

  let midIndex = Math.floor(arr.length/2);
  let midVal = arr[midIndex];

  if(midVal === target){
    return midIndex;
  } else if(midVal < target){

    let bS = binarySearch(arr.slice(midIndex+1),target);
    if (bS === -1) {
      return -1;
    } else {
      return midIndex + 1 + bS;
    }

  } else {
    return binarySearch(arr.slice(0,midIndex),target);
  }
}

console.log(binarySearch([1,2,3,4,5],7));
