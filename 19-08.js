//clouser

function outer( inner= ()=>{
console.log("inner");
} ) {
var x=8;   
  return console.log(x);
}
outer();