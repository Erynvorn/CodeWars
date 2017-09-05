function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
 if (head == null) { var newNode = new Node(data)} else {
   var newNode = new Node(data);
   newNode.next = head;
   
 }
 return newNode;// Go.
}



function buildOneTwoThree() {
  var LL = push(null,3);
  var LL = push(LL,2);
  var LL = push(LL,1);
  return LL;
  // Go.
}

