//delete item using three function

const arr = ["first", "second", "third", "fourth", "last"]
//delete lest one
arr.pop();
console.log("Delete last one ::" + arr);

//delete first one 
arr.shift();
console.log("Delete first one :: "+ arr);

//delete in middle
arr.splice(1, 1);
console.log("Delete middle one :: " + arr);

arr.push("add new");
console.log(arr);