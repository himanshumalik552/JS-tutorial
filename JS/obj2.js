//get data other obj from other obj// via __proto__

const obj = {
    key1: 'value1',
    key2: 'value2'
}

const obj2 = Object.create(obj)//here is a __proto__ of obj  
obj2.key3 = "value3";
console.log(obj2);