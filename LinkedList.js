function Node(data) {
  this.data = data;
  this.next = null;
}

function LList() {
  this.head= new Node("head");
  this.find = find;
  this.push = push;
  this.insert = insert;
  this.nremove = nremove; 
  this.ndisplay = ndisplay;
}

function find (item) {
  var currNode = this.head;
  while (currNode.data != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function push (NewElement) {
  var newMode = new Node(NewElement);
  var currNode = this.head;
  newMode.next = currNode.next;
  currNode.next = newMode;
}

function insert (NewElement, item) {
  var newNode = new Node(NewElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

function ndisplay() {
  var currNode = this.head;
  while ((currNode.next !== null)) {
    console.log(currNode.next.data);
    currNode = currNode.next;
  }
}

function nremove (item) {
  var prevNode = this.head;
  while ((prevNode.next !== null) && (prevNode.next.data != item)) {
    prevNode = prevNode.next;
  }
  if (prevNode.next !== null) {prevNode.next = prevNode.next.next}
}

var cities = new LList();
cities.insert("Paris","head");
cities.insert("Tokyo", "Paris");
cities.insert("Zurich","Tokyo");
cities.insert("Tokyo2", "Zurich");
cities.insert("HongKong","Tokyo2");
cities.insert("NewYork", "HongKong");
cities.insert("Toto","Paris");
cities.nremove("Tokyo2");
cities.nremove("Toto");
cities.push("First")
cities.ndisplay();
