function BinarySearchTree(value) {
  	this.value = value;
  	this.left = null;
  	this.right = null;
}


BinarySearchTree.prototype.size = function () {
    let value = this.value? 1 : 0
    let right = this.right ? this.right.size() : 0
    let left = this.left ? this.left.size() : 0

    return value + right + left
}


BinarySearchTree.prototype.insert = function (value) {
	if (value === this.value) return
	

	if (value < this.value) {
		if (this.left) {
			this.left.insert(value)
		} else {
			this.left = new BinarySearchTree(value)
		}
	} else {
		if (this.right) {
			this.right.insert(value)
		} else {
			this.right = new BinarySearchTree(value)
		}
	}
}

BinarySearchTree.prototype.contains = function (value) {
	if (this.value === value) {
	  	return true;
	}
	if(value > this.value) {
	  	if (this.right) { 
	  	  	return this.right.contains(value);

	  	} else { 
	  	  	return false;
	  	}
	} else {
	  	if (this.left) {
	  	  	return this.left.contains(value);

	  	} else {  
	  	  	return false;
	  	}
	}
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
	if(order === 'pre-order'){
		// root - izq - der
		cb(this.value);
		if(this.left !== null) this.left.depthFirstForEach(cb, order);
		if(this.right !== null) this.right.depthFirstForEach(cb, order);

	}else if(order === 'post-order'){
	  	// izq - der - root
		if(this.left !== null) this.left.depthFirstForEach(cb, order);
		if(this.right !== null) this.right.depthFirstForEach(cb, order);
		cb(this.value);
	
	}else{
	  	// in order
	  	// izq - root - der
	  	if(this.left !== null) this.left.depthFirstForEach(cb, order);
	  	cb(this.value);
	  	if(this.right !== null) this.right.depthFirstForEach(cb, order);
	}
};


BinarySearchTree.prototype.breadthFirstForEach = function (cb, array=[]){
	if(this.left !== null){
	  	array.push(this.left);
	}

	if(this.right !== null){
	  	array.push(this.right);
	}

	cb(this.value);

	if(array.length > 0){
	  	array.shift().breadthFirstForEach(cb, array);
	}
};


BinarySearchTree.prototype.sum = function() {
    // Tu código aca:
    let value = this.value
    let right = this.right ? this.right.sum() : 0
    let left = this.left ? this.left.sum() : 0

    return value + right + left
}





