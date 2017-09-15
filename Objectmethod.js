//function greet(myName, yourName){
// return "Hello " + yourName + ", my name is " + myName;
//}

function Person (name, greet) {
    this.name = name;
    this.greet = function (qq) {
       return "Hello "+qq+", my name is "+this.name;
    };
}


var joe = new Person('Joe');
joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
joe.name # should == 'Joe'
