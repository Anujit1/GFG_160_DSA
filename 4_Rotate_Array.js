// Rotate Array

function rotateArr(arr, d) {
        
    const n = arr.length;
    d = d % n;
    
    function reverse(l, r){
        while(l < r){
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++;
            r--;
        }
    }
    
    reverse(0, d-1);
    reverse(d, n-1);
    reverse(0, n-1);
    
}

let arr = [1, 2, 3, 4, 5, 6];
let d =2;

rotateArr(arr, d);

console.log(arr);
