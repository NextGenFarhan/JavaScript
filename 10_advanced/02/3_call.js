function setUsername(username) {
    // complex DB call
    this.username = username
    console.log("called")
}
function createUser(username, email, password) {
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}
const code = new createUser("first", "first@gmail.com", "2742")
console.log(code);