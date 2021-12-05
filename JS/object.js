const obj = { name: "jon", age: 32 };
// console.log(obj);
// console.log(obj["age"]);
obj["qualification"] = ["10th", "12th", "BCA", "MCA"];
// console.log(obj["qualification"]);


//obj iteration 
for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
}


