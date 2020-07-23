console.log(" Following are the methods of array and strings");

//Arrays : Arrays provide a lot of methods. To make things easier

let number_arr = [ 10, 20, 30, 40, 50 ]; 
let string_arr = [ "piyush", "gourav", "smruti", "ritu" ];

console.log(number_arr, string_arr);

number_arr.push(60);

number_arr.push(70, 80, 90);

string_arr.push("sumit", "amit");

console.log("After push op " + number_arr); 
console.log("After push op " + string_arr); 


number_arr.splice(1, 3); 

string_arr.splice(1, 2, "xyz", "cloud 1", "cloud 2");

console.log("After splice op " + number_arr); 
console.log("After splice op " + string_arr); 



// String methods
 
let str=" Lets enroll to JS essentials"
 console.log(str);

 console.log(str.charAt('3'));

 console.log(str[11]);
 
 console.log(str.indexOf('J'));
 console.log(str.indexOf('e'));

 console.log(str.endsWith("essentials"));
 console.log(str.split('l'));

 console.log(str.split(' ')); 