function flattenArray(arr){
    let result = []
    function _flattenArray(_arr){
        for(let i = 0;i<_arr.length;i++){
            if(Array.isArray(_arr[i])){
                _flattenArray(_arr[i])
            } else {
                result.push(_arr[i])
            }
        }
    }
    _flattenArray(arr)
    return result
}

console.log(flattenArray([[[1,2],3],[[5,[6],7]],8]))