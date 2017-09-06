function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(source, dest) {
  this.source = source;
  this.dest = dest;
}

function moveNode(source, dest) {
  if (source == null) {throw "error"} 
  else {
    var transfer = source.data;
    if ( source.next == null) { source = null } 
      else { source = source.next;
    }
    if (dest == null) { dest = new Node(transfer)} 
      else { var newNode = new Node(transfer);
      newNode.next = dest;
      dest = newNode;
    }
  
  return new Context(source,dest);
  }
}
