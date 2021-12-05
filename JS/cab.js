// call apply and bind

function about(stream, year) {
  console.log(
    `name: ${this.user} age: ${this.age} class: ${this.qualification} ${stream} ${year}`
  );
}
const user1 = {
  user: "himanshu",
  age: 21,
  qualification: "MCA",
  about: function (stream, year) {
    console.log(
      `name: ${this.user} age: ${this.age} class: ${this.qualification} ${stream} ${year}`
    );
  },
};
const user2 = {
  user: "dheeraj",
  age: 20,
  qualification: "BCA",
};
const user3 = {
  user: "shubham",
  age: 22,
  qualification: "MCA",
};
about.call(user2, "computer", "2017");
about.apply(user1, ["computer", "2021"]);
const fun = about.bind(user3, "IT", "2021");
fun();
