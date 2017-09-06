function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
 if ((listA == null) && (listB == null)) {return null} else {
 if (listA == null) {return listB} else {
 if (listB == null) {return listA} else {
 var lead = listA;
 while (listA.next !== null) { listA = listA.next } 
 listA.next = listB;
 return lead;
 }
 // Your code goes here.
  // Remember to return the head of the list.
}}}
