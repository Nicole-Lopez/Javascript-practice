// Construct Single Node
class Node {
 	constructor(data, next = null) {
 	  	this.data = data;
 	  	this.next = next;
 	}
}

// Create/Get/Remove Nodes From Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }


  // ******************************************************************
  // ****************** INSERT FIRST NODE ******************
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  // ******************************************************************
  // ******************************************************************



  // ******************************************************************
  //*********************** INSERT LAST NODE ***********************
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }
  // ******************************************************************
  // ******************************************************************



  // ******************************************************************
  // *************************** INSERT AT INDEX ************************
  insertAt(data, index) {
    //  If index is out of range
    if (index< 0 || index > this.size) {
      return;
    }


    // If first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // ******************************************************************
  // ******************************************************************

  // ******************************************************************
  // ************************** GET AT INDEX ****************************
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }
  // ******************************************************************
  // ******************************************************************
  

  // ******************************************************************
  // ************************** REMOVE AT INDEX **********************
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }
  // ******************************************************************
  // ******************************************************************

  
  // ******************************************************************
  // ********************** CLEAR LIST **************************      

  clearList() {
    this.head = null;
    this.size = 0;
  }
  // ******************************************************************
  // ******************************************************************


  // ******************************************************************
  // *********************** PRINT LIST DATA ***********************
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  // ******************************************************************
  // ******************************************************************


  // ******************************************************************
  // *********************** CHANGE NOT NUMBERS ***********************

  changeNotNumbers(replace) {
    let current = this.head;
    let count = 0

    while(current){
        if (typeof current.data === 'string' && Number.isNaN(parseInt(current.data))) { 
            current.data = replace
            count++
        }
        current = current.next;
    }

    return count    
  }


}

const list = new LinkedList();

// list.insertFirst(100);
// list.insertLast(200);
// list.insertLast(300);
// list.insertLast(400);

// list.removeAt(2)

// list.printListData();

console.log(list)