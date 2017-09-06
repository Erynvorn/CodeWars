function Node(data) {
  this.data = data;
  this.next = null;
}

function insertSort(head) {
var lead = head; 
if ( head == null ) { return null } else {
    if ( head.next == null ) {return lead} else {
    while(head.next !== null) {
    if ( head.data <= head.next.data ){ head = head.next; }
      else {
            var transfer = head.data;
            head.data = head.next.data;
            head.next.data = transfer;
            head = lead;
            }

}
return(lead);
}
}
}

