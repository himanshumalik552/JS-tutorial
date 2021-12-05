// function about() {
//     console.log(`Name is ${this.name} age ${this.age}`);
// }


// const user1 = {
//     name: "jon",
//     age:22,
// }
// const user2 = {
//   name: "heman",
//   age: 23,
// };


// about.call(user1);
// about.call(user2);

// function fun1() {
//     var name = "jon";
//     function display() {
//         console.log(name);
//     }
//     return display;
// }
// var calls = fun1()
// calls();

let Pro = new Promise(
    function (Resolve, Reject) {
        let a = 3;


        if (a === 4)
        {
            Resolve();
            }
        else {
            Reject();
            }       
    }
);
Pro.then(
    function () {
console.log("It is work perfect");
}
).catch(
    function () {
        console.log("It is give error");
    }
)


