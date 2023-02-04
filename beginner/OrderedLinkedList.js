// head --> 5 --> 3 --> 2 --> null
// head --> 4 --> 3 --> 1 --> null
// head --> 9 --> 3 --> -1 --> null

function OrderedLinkedList() {
    this.head = null;
}

function Node(value){
    this.value = value;
    this.next = null;
}

OrderedLinkedList.prototype.print = function(){
    let print = 'head'
    let pointer = this.head
    while (pointer) {
        print += ' --> ' + pointer.value
        pointer = pointer.next;
    }
    print += ' --> null'
    return print
}


// ------------------------------------------------------------------------
// > LL.print()
// < 'head --> null'
// > LL.add(1)
// > LL.print()
// < 'head --> 1 --> null'
//    2       c
// > LL.add(5)
// > LL.print()
// < 'head --> 5 --> 1 --> null'
// > LL.add(4)
// > LL.print()
// < 'head --> 5 --> 3 --> 1 --> null'
//               4

OrderedLinkedList.prototype.add = function(val){
    let current = this.head
    let node = new Node(val)

    if (!this.head || current.value <= node.value) {
        node.next = current;
        return this.head = node;

    } else {
        while (current.next != null && current.next.value > node.value){
            current = current.next;
        }
        
        node.next = current.next;
        return current.next = node;
    }      
}
// ------------------------------------------------------------------------



// ------------------------------------------------------------------------
// > LL.print()
// < 'head --> 5 --> 4 --> 1 --> null'
// > LL.removeHigher()
// < 5
// > LL.removeHigher()
// < 4
// > LL.removeHigher()
// < 1
// > LL.removeHigher()
// < null

OrderedLinkedList.prototype.removeHigher = function(){
    if (!this.head) {
        return null
    } else {
        let higher = this.head
        let replace = this.head.next

        this.head = replace

        return higher.value
    }  
}
// ------------------------------------------------------------------------


// ------------------------------------------------------------------------
// > LL.print()
// < 'head --> 5 --> 4 --> 1 --> null'
// > LL.removeHigher()
// < 1
// > LL.removeHigher()
// < 4
// > LL.removeHigher()
// < 5
// > LL.removeHigher()
// < null

OrderedLinkedList.prototype.removeLower = function(){
    if (!this.head) {
        return null
    } else {
        let current = this.head

        if (!current.next) {
            this.head = null
            return current.value

        } else {
            let prev

            while (current.next) {
                prev = current
                current = current.next;
            }
            
            prev.next = null
            return current.value            
        }
    }     
}

// ------------------------------------------------------------------------



















