function Node(data) {
  this.data = data;
  this.next = null;
}

function removeDuplicates(head) 
{
 var lead = head;
 if (head == null ) { return null } 
   else {
         if (head.next == null) {return head } // one item
         else { 
               while(head.next !== null) 
               {
                 if (head.data === head.next.data) 
                 { head.next = head.next.next } else { head = head.next}
               }
               head= lead;
               return head;
             } 
          }
}
