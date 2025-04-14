//1. Second Largest element of a given array.

let arr = [11, 2, 35, 55, 88, 31, 889]

function getSecondLargest(arr) {
        
    let max = -1;
    let max2 = -1;
    
    for(let i of arr){
        if(max < i){
            max2 = max
            max = i;
        }
        
        else if(i < max && i > max2){
            max2 = i;
        }
    }
    
    return max2;
}

console.log(getSecondLargest(arr));
