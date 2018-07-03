/* reduce - Implement the reduce function.

reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10 */

reduce = (arr, func, initialAccum) => {

  for (let i = 0; i < arr.length; i++) {

    let current = arr[i];
    initialAccum = func(initialAccum, current, i, arr);
  }
  return initialAccum;
}

console.log( reduce([1, 2, 3, 4], (a, b) => a + b , 0) );

// If I dont supply the intialAccum, will get NaN as the final output value from this function. Also when invoking the function, as its second argument, I have to pass a function, otherwise, it will throw error saying func is not a function. Because, reduce() will invoke its second argument func as a function, by passing to the 4 arguments, I have mentioned above. And without getting a function, it will throw error.

// Alternative solution with recursion

reduce_recursive = (arr, funct, initialAccum) => {
  if (arr.length === 0) {
    return initialAccum;
  } else {
    return reduce_recursive(arr.slice(1), funct, funct(arr[0], initialAccum))
  }
}

console.log( reduce_recursive([1, 2, 3, 4], (a, b) => a + b , 0) );

// Further compacting with Destructuring and ternary

reduce_recursive1 = ([x, ...xs], funct, initialAccum) => {
  return x === undefined ? initialAccum : reduce_recursive1(xs, funct, funct(initialAccum, x))
}

console.log( reduce_recursive1([1, 2, 3, 4], (a, b) => a + b , 0) );