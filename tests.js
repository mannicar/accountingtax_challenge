///////////////////////////////////////////////////////////////////////////////
// Pseudocode
// function smallestInt(A):
//   1. Generate collection of possible integers
//   2. Discard any potential negative integers
//   3. Iterate over A to account for elements in generated collection
//   4. Iterate over ordered generated collection to find first gap greater than 0.
///////////////////////////////////////////////////////////////////////////////
// Benchmark results:
// Calling smallestInt on the worst 
//   case scenario with 100000 items 
//   and a max value of 1000000 
//   returned 1 ran in 99.4100000243634 ms
///////////////////////////////////////////////////////////////////////////////
// function smallestInt(A) {

//   maxVal = Math.max(...A);

//   if (maxVal <= 0) {
//     return 1

//   ordered = {}

//   for (i = 0; i < maxVal; i++) {
//     currVal = A[i];
//     if (currVal < 0) {
//       continue;
//     }
//     ordered[currVal] = currVal;
//   }

//   for (i = 1; i < maxVal; i++) {
//     if (ordered[i] == null){
//       return i
//     }
//   } 

//   return maxVal+1
// }
///////////////////////////////////////////////////////////////////////////////
// Benchmark Results:
// Calling smallestInt on the worst 
//   case scenario with 100000 items 
//   and a max value of 1000000 
//   returned 1 ran in 69.32999996934086 ms
///////////////////////////////////////////////////////////////////////////////
function smallestInt(A) {
  // Null check
  if (A == null || A.length == 0) {
    return 1
  }
  // Generate null array
  maxVal = Math.max(...A);

  if (maxVal <= 0) {
    return 1
  }

  ordered = []
  for (var i = 0; i < maxVal; i++){
    ordered.push(null)
  }

  // Generate positive integer array
  for (i = 0; i < maxVal; i++) {
    currVal = A[i];
    if (currVal < 0) {
      continue;
    }
    ordered[currVal] = currVal;
  }

  // Locate lowest missing positive integer (natural number)
  for (i = 1; i < maxVal; i++) {
    if (ordered[i] == null){
      return i
    }
  } 

  // If no integer is missing, return next integer
  return maxVal+1
}
///////////////////////////////////////////////////////////////////////////////
// Tests written in vanilla JS:  would ordinarily be written in Jest or Mocha
// Choice was made to write in vanilla JS to fit project description more 
// closely, as well as to avoid the need to install packages.
///////////////////////////////////////////////////////////////////////////////
function runTests() {
  console.clear();
  console.log('Running tests...');

  // print results to console

  // Test 1; should return 5
  // General test; implemented test
  arr1 = [1, 3, 6, 4, 1, 2]
  testVal1 = smallestInt(arr1);
  expected1 = 5;
  if (typeof testVal1 != 'number'){
    console.log(testVal1);
    return;
  } 
  console.log(generateTestLog(1, expected1, testVal1));

  // Test 2; should return 4
  // Test no missing integers
  arr2 = [1, 2, 3];
  testVal2 = smallestInt(arr2);
  expected2 = 4;
  console.log(generateTestLog(2, expected2, testVal2));

  // Test 3; should return 1
  // Test negative integers
  arr3 = [-1,-3];
  testVal3 = smallestInt(arr3);
  expected3 = 1;
  console.log(generateTestLog(3, expected3, testVal3));

  // Test 4; should return 1
  // Test maximum array size
  arr4 = [...Array(100001).keys()]
  arr4.splice(0,1)
  arr4 = arr4.map((x) => x + 900001)
  testVal4 = smallestInt(arr4);
  expected4 = 1;
  console.log(generateTestLog(4, expected4, testVal4));

  // Test 5; should return 100001
  // Test large value input
  arr5 = [...Array(100001).keys()]
  arr5.splice(0,1)
  testVal5 = smallestInt(arr5);
  expected5 = 100001;
  console.log(generateTestLog(5, expected5, testVal5));

  // Test 6; should return 1
  // Test empty array
  arr6 = []
  testVal6 = smallestInt(arr6);
  expected6 = 1;
  console.log(generateTestLog(6, expected6, testVal6));

  // Test 7; should return 1
  // Test null input
  arr7 = null
  testVal7 = smallestInt(arr7);
  expected7 = 1;
  console.log(generateTestLog(7, expected7, testVal7));
}
///////////////////////////////////////////////////////////////////////////////
// function benchmarkText(fun, inp) {
//   var t0 = performance.now()
//   res = fun(inp)
//   var t1 = performance.now()
//   return(`Function ${fun} was called with input ${inp}
//   and returned a result ${res} with an execution time
//   of ${t1-t0} ms`);
// }
///////////////////////////////////////////////////////////////////////////////
function runBenchmark() {
  console.clear();

  worstCase = [...Array(100000).keys()]
  worstCase = worstCase.map((x) => x + 900001)

  var t0 = performance.now()
  worstRes = smallestInt(worstCase)
  var t1 = performance.now()

  console.log(`Calling smallestInt on the worst 
  case scenario with ${worstCase.length} items 
  and a max value of ${Math.max(...worstCase)} 
  returned ${worstRes} ran in ${t1-t0} ms`);
}
///////////////////////////////////////////////////////////////////////////////
function generateTestLog(id, expected, result) {
  if (expected == result) {
    return `Test ${id} passed: Expected value ${expected}; returned value ${result}`;
  } else {
    return `Test ${id} failed: Expected value ${expected}; returned value ${result}`;
  }
} 