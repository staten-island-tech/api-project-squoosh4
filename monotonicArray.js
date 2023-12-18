function monoCheck(arr) {
    
    let k = 0;

    
    if (k === 0) {

        for (let i = 1; i < arr.length; i++) {

            for (let j = 0; j < arr.length; k++) {

                if (arr[j] >= arr[i]) { continue
                } else { k++; break }
            
            };

            if (k === 1) { break };

    }};

    if (k === 1) {

        for (let i = 1; i < arr.length; i++) {

            for (let j = 0; j < arr.length; k++) {

                if (arr[j] <= arr[i]) { continue } else { k++; break }
            
            };

            if (k === 2) { break };

    }};

    if (k === 0 || 1) { return true }
    if (k === 2) { return false }

};

const arr1 = [1,2,3,4,5,6,7,8,9];

const arr2 = [9,8,7,6,5,4,3,2,1];

const arr3 = [1,6,5,3,7,2,8,9,4];

const arr4 = [11,22,33,33];

console.log(monoCheck(arr1))
console.log(monoCheck(arr2))
console.log(monoCheck(arr3))
console.log(monoCheck(arr4))