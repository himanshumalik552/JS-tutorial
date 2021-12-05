// let obj = {
//     firstName: "jon",
//     lastName: "don",

//     printFullName: function name() {
        
//         console.log(this.firstName + " " +this.lastName );
//     }
// }

// obj.printFullName();

function anagrams (stringA , stringB) {
    
    stringA = stringA.replace(/^[w]/g,'').toLowerCase();
    stringB = stringB.replace(/^[w]/g,'').toLowerCase();

    return sortString(stringA) === sortString(stringB)

}

function sortString(string) {
    
    return string.split('').sort().join();
}

let result = anagrams("silent","listen")

console.log(result);