function smallestInt(A) {

  maxVal = Math.max(...A);

  if (maxVal <= 0) {
    return 1
  }

  ordered = []
  for (var i = 0; i < maxVal; i++){
    ordered.push(null)
  }

  for (i = 0; i < maxVal; i++) {
    currVal = A[i];
    if (currVal < 0) {
      continue;
    }
    ordered[currVal] = currVal;
  }

  for (i = 1; i < maxVal; i++) {
    if (ordered[i] == null){
      return i
    }
  } 

  return maxVal+1
}

function runTests() {
  console.clear();
  console.log('Running tests...');

  // Test 1; should return 5
  arr1 = [1, 3, 6, 4, 1, 2]
  testVal1 = smallestInt(arr1);
  if (testVal1 == "smallestInt not implemented"){
    console.log(testVal1);
    return;
  } else if (testVal1==5){
    console.log('Test 1 passed', testVal1);
  } else {
    console.log('Test 1 failed', testVal1);
  }

    // Test 2; should return 4
    arr2 = [1, 2, 3];
    testVal2 = smallestInt(arr2);
    if (testVal2==4){
      console.log('Test 2 passed',testVal2);
    } else {
      console.log('Test 2 failed', testVal2);
    }

    // Test 3; should return 1
    arr3 = [-1,-3];
    testVal3 = smallestInt(arr3);
    if (testVal3 == 1){
      console.log('Test 3 passed', testVal3);
    } else {
      console.log('Test 3 failed', testVal3);
    }

    // Test 4; should return 1,000,001
    arr4 = [...Array(100001).keys()]
    arr4.splice(0,1)
    arr4 = worstCase.map((x) => x + 900001)
    testVal4 = smallestInt(arr4);
    if (testVal4 == 1){
      console.log('Test 4 passed', testVal4);
    } else {
      console.log('Test 4 failed', testVal4);
    }

    // Test 5; should return 100001
    arr5 = [...Array(100001).keys()]
    arr5.splice(0,1)
    testVal5 = smallestInt(arr5);
    if (testMaxVal == 100001){
      console.log('Test 5 passed', testVal5);
    } else {
      console.log('Test 5 failed', testVal5);
    }


  // print results to console
}

function runBenchmark() {
  console.clear();

  worstCase = [...Array(100000).keys()]
  worstCase = worstCase.map((x) => x + 900001)

  var t0 = performance.now()
  worstRes = smallestInt(worstCase)
  var t1 = performance.now()

  console.log(`Calling smallestInt on the worst case scenario with ${worstCase.length} items 
  and a max value of ${Math.max(...worstCase)} returned ${worstRes} ran in ${t1-t0} ms`)
  
  // print result to console
}
