function rotateArray(arr, k) {
    k = k % arr.length;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let j = i + k;
        if (j >= arr.length) {
            j= j - arr.length;
        }
        result[j] = arr[i];
    }
    return result;
}


arr=[1,2,3,4,5]

console.log(rotateArray(arr,7));

