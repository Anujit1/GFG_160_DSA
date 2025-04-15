function reverseArray(arr) {
    let start = 0;
    let end = (arr.length)-1;
    let temp;
    

    // two pointer
    while(start < end){
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        
        start++;
        end--;
    }
}

let arr = [1, 2, 5, 0, 4, 0, 8, 7];

reverseArray(arr);

console.log(arr);
