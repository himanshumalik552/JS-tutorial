//make a function which is object type and follow the OOPs concept

function createUser(firstName, lastName, age) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.about = userMethod.about;
    return user;

}
const userMethod = {
    about: function () {
        console.log(`${this.firstName} ${this.lastName}  is age ${this.age}`);
    }
}
const user1 = createUser("himanshu", "malik", 12);
// console.log(user1.about());
user1.about();