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
 

function count(head, data) {
 var count = 0;
 var l = length(head);
 if ( l > 0) { 
     for ( i=0; i< l ; i++) {
         if (data === head.data) {count++}
         head = head.next;  
         }
        } 
   return count;
   }
