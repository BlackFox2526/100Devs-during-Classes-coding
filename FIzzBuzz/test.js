// given an array on n integers, and two integers l and r, find the number of pairs (i,j) where (1<i<j<n) such that the value arr[i]+arr[j] lies between l and r, both inclusive. Array indices start at 1

function getNumPairs(arr, l, r) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] >= l && arr[i] + arr[j] <= r) {
                count++;
            }
        }
    }
    return count
}