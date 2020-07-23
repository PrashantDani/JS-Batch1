console.log("Prashant");
let os= prompt("Enter the OS Name and its version","ex: Android 9");

let list= os.split(" ")
//let ver= prompt("Enter the version ");

console.log(` The OS name is : ${ list[0]}  and version is : ${list[1]}`);