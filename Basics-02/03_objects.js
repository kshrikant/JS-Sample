
const mySym = Symbol("key1")
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(JsUser["lastLoginDays"])

// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greetingTHreee = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetingTHreee());
console.log(JsUser.greetingTwo());