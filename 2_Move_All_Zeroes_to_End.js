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
    let count = 0, temp;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != 0){
            temp = arr[i];
            arr[i] = arr[count];
            arr[count] = temp;
            count++;
        }
    }


    
}



let arr = [1, 2, 0, 5, 0, 4, 0, 8, 7, 0, 0, 58];
moveZero(arr);

console.log(arr);




