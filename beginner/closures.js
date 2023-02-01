// COUNTER
// const newCounter = counter()
// newCounter()     // 1
// newCounter()     // 2

// const otherCounter = counter()
// otherCounter()      // 1
// otherCounter()      // 2 

function counter() {
  	var count = 1;
  
	return function() {
	  	return count++;
	} 
}

// CACHE

// function square(n){
//   return n * n
// }

// const squareCache = cacheFunction(square)

// squareCache(5)    // call square(5), store the result, and return it
// squareCache(5)    // not call square(5), return the result of 5 in cache

function cacheFunction(cb) {
	var cache = {};
	return function (a){
		if(cache.hasOwnProperty(a)){
		  	return cache[a];
		}else{
			cache[a] = cb(a); 
			return cache[a];
		}
	}
}


