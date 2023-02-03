//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)

var countArray = function(array) {
    arrFlat = array.flat(Infinity)

    let result = 0

    for (let i = 0; i < arrFlat.length; i++) {
        result += arrFlat[i]
    }
    
    return result


	// WITHOUT FLAT()

    // let result = 0
    // for (let i = 0; i < array.length; i++) {
    // 	if (Array.isArray(array[i])) {
    // 		result += countArray(array[i])

    // 	} else {
	   //      result += array[i]
    // 	}
    // }
    
    // return result
}

