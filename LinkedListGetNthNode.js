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


function length(head) {
 var count = 0;
  if (head !== null ) {
  count =1;
  while ((head.next !== null)) {
    count++;
    head = head.next;
  }}
  return count;
}



function getNth(node, index) {
    l = length (node);
    if ((index > l-1)) {throw new error("error")} else {
      if (l = 0) {throw new error("error")} else {
        for ( i=0 ; i<index ; i++ ){node = node.next}
      return node;
      }
    }
}
