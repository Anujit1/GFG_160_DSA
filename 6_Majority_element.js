function findMajority(arr) {
    // Your code goes here

    const n = arr.length;
    let count1 = 0, count2 = 0;
    let candidate1 = null, candidate2 = null;

    // 1st pass: find potential candidates
    for (let num of arr) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    // 2nd pass: verify candidates
    count1 = count2 = 0;
    for (let num of arr) {
        if (num === candidate1) count1++;
        else if (num === candidate2) count2++;
    }

    const result = [];
    if (count1 > Math.floor(n / 3)) result.push(candidate1);
    if (count2 > Math.floor(n / 3)) result.push(candidate2);

    return result.sort((a, b) => a - b);
    
}

let arr = [8, 6, 5, 5 ,5, 8, 8, 8, 6, 6, 6];

console.log(findMajority(arr));
