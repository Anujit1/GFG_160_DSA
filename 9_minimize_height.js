function getMinDiff(arr, k) {
    // your code here
    let n = arr.length;
    if (n === 1) return 0;

    // Step 1: Sort the array
    arr.sort((a, b) => a - b);

    // Initial max and min difference
    let ans = arr[n - 1] - arr[0];

    let smallest = arr[0] + k;
    let largest = arr[n - 1] - k;

    for (let i = 0; i < n - 1; i++) {
        let min = Math.min(smallest, arr[i + 1] - k);
        let max = Math.max(largest, arr[i] + k);

        if (min < 0) continue; // heights cannot be negative

        ans = Math.min(ans, max - min);
    }

    return ans;
}


let arr = [1, 5, 8, 10];

let k = 2;

console.log(getMinDiff(arr, k));
