function HashTable() {
    this.numBuckets = 35;
    this.buckets = [];
}

HashTable.prototype.hash = function (key) {
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
        sum += key.charCodeAt(i);
    }
    return sum % this.numBuckets; 
};

HashTable.prototype.set = function (key, value){
    if(typeof key !== 'string') throw TypeError('Keys must be strings');
    let i = this.hash(key);
    if(this.buckets[i] === undefined){
        this.buckets[i] = {}
    }
    this.buckets[i][key] = value;
};

HashTable.prototype.get = function (key){
    let i = this.hash(key);
    return this.buckets[i][key];
};

HashTable.prototype.hasKey = function (key){
    let i = this.hash(key);
    return this.buckets[i].hasOwnProperty(key);
};
