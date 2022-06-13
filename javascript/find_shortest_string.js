function findShortestString(arr) {
  let currentShortest = arr[0]
  let shortestLength = currentShortest.length 
  arr.forEach(string => {
    if (string.length < shortestLength){
      currentShortest = string
      shortestLength = currentShortest.length
    }
  });
  return currentShortest
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
  let iterations = 100;
  console.time('function 1')
  for (let i = 0; i < iterations; i++){
    findShortestString(['flower', 'juniper', 'lily', 'dandelion'])
  }
  console.timeEnd('function 1')

}


module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
