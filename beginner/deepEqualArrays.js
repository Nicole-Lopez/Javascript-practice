// deepEqualArrays([0,1,2], [0,1,2]) => true
// deepEqualArrays([0,1,2], [0,1,2,3]) => false
// deepEqualArrays([0,1,[[0,1,2],1,2]], [0,1,[[0,1,2],1,2]]) => true

function deepEqualArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
        let res
        for (let i = 0; i < arr1.length; i++) {
            if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
                res = deepEqualArrays(arr1[i], arr2[i])
            } else{
                res = arr1[i] === arr2[i]
            }
        }
        
        return res
    }else{
        return false
    }
}