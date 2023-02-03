function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function(elemento) {
  return this.array.push(elemento);
}

Queue.prototype.dequeue = function() {
  return this.array.shift();
}

Queue.prototype.size = function() {
  return this.array.length;
}


var mergeQueues = function(queueOne, queueTwo) {
    let res = new Queue();

    for (let i = 0; i < (Math.max(queueOne.array.length, queueTwo.array.length)); i++) {
        if (queueOne.array[i]) res.enqueue(queueOne.array[i]);            
        
        if (queueTwo.array[i]) res.enqueue(queueTwo.array[i]);        
    }

    return res
}

