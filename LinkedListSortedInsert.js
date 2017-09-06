function Node(data) {
  this.data = data;
  this.next = null;
}



function sortedInsert(head, data) {
  var lead = head; // lead
  if (head == null) {var newNode = new Node(data); return newNode;} else {
    // insertion in 1st position
    if (data < head.data) { var newNode = new Node(data); 
                            newNode.next = head; 
                            return newNode;} else {
    // insertion inside the LL  
    var previous = head ; // first node
    head = head.next;   // second node
    while (head.next !== null) { if (data<head.data) 
                                { var newNode = new Node(data);
                                newNode.next = head ;
                                previous.next = newNode;
                                return lead;}
                                previous.next= head;
                                head=head.next;
                                }
    if (head.next == null) { 
                            if (data<head.data) {
                            var newNode = new Node(data);
                            newNode.next = head;
                            previous.next.next = newNode;
                            return lead; } else {
                            var newNode = new Node(data);
                            head.next = newNode;
                            return lead;}}
                                
                               }
                            }
                        }
