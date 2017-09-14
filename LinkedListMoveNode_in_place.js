function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}


function moveNode(source, dest) {
  if (source == null || dest == null ) {throw "error"} 
  else { if (source.data == null && dest.data == null) {throw "error"}
   else { if (source.data == null && source.next == null) { throw "error" }
     else {
        var transfer = source.data;
        if ( source.next === null) { source.data = null } 
          else { source.data = source.next.data; source.next = source.next.next}
        if (dest == null) { dest = new Node(transfer)} 
          else { if (dest.data == null) {dest.data = transfer; dest.next = null} 
                    else {
                    var newNode = new Node(transfer);
                    newNode.data = dest.data;
                    newNode.next = dest.next;
                    dest.data = transfer;
                    dest.next = newNode;
                          }}}}
  }
}
