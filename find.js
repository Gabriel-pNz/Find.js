function find (arr, index) {
    
    let left;
    let right;
    let valMaisProxLeft;
    let valMaisProxRight;
    
    for (let i = 0; i < arr.indexOf(arr[index]); i ++) {
       
        if (arr[i] > arr[index]) {
            left = arr.indexOf(arr[i])
            valMaisProxLeft = arr[i]
        }
    }

    for (let i = arr.length; i > arr.indexOf(arr[index]); i --) {

        if (arr[i -1 ] > arr[index]) {
            right = arr.indexOf(arr[i - 1])
            valMaisProxRight = arr[i-1]
        } 
    }

    if (valMaisProxLeft > valMaisProxRight) {
        return left
    }else if (valMaisProxLeft < valMaisProxRight){
        return right
    }else if (valMaisProxLeft === undefined) {
        return right
    }else if (valMaisProxRight === undefined){
        return left
    }
}

console.log(find([ -20, 12, 67, 1, 33], 0))
console.log(find([ -20, 12, 67, 1, 33], 1))
console.log(find([ -20, 12, 67, 1, 33], 2))
console.log(find([ -20, 12, 67, 1, 33], 3))
console.log(find([ -20, 12, 67, 1, 33], 4))


