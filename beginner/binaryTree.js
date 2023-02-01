class BinaryTree {
 	constructor(value) {
 	  	this.data = value;
 	  	this.left = null;
 	  	this.right = null;
 	}

 	add(value){
 		if (value === this.data) {
 			return
 		}

 		if (value < this.data) {
 			if (this.left) {
 				this.left.add(value)
 			} else {
 				this.left = new BinaryTree(value)
 			}
 		} else {
 			if (this.right) {
 				this.right.add(value)
 			} else {
 				this.right = new BinaryTree(value)
 			}
 		}
 	}
}


let tree = new BinaryTree(50)

// tree.add(20)
// tree.add(16)
// tree.add(8)
// tree.add(100)
// tree.add(15)

// console.log(tree)

