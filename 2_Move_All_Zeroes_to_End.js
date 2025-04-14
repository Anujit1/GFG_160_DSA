//2. Move All Zeroes of an array to the End



// brute force

/* function moveZero(arr){
    let chk = 1;

    for(let i = 0; i < arr.length-1; i++){
        chk = 0;
        for(let j = 0; j < arr.length-1; j++){
            if(arr[j]==0 && arr[j+1]!=0){
                swap(j);
                chk = 1;
            }
        }
        if(chk == 0){
            return;
        }
    }
}

function swap(position){

    let temp = arr[position];
    arr[position] = arr[position+1];
    arr[position+1] = temp;
}

 */

/* ******************************************************************************************************** */



// optimized

function moveZero(arr) {
    let count = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            arr[count++] = arr[i];
        }
    }
    
    while(count < arr.length){
        arr[count++] = 0
    }
    
}



let arr = [1, 2, 5, 0, 4, 0, 8, 7, 0, 0, 58, 9, 0 ,45, 0,0,0,0,0,77,0,0,0,0,1];
moveZero(arr);

console.log(arr);




