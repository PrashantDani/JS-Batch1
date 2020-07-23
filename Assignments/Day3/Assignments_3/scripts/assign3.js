console.log("Print the marks and its grade");

let marks = prompt(" Enter the marks out of 100");

if  (marks >=75 && marks<=100)
    {
        console.log(`The entered marks are : ${marks} and the grade is "A"`);
    }
    else if (marks >=50 && marks<=74)
    {
        console.log(`The entered marks are : ${marks} and the grade is "B"`);
    }
   else if (marks >=35 && marks<=49)
     {
         console.log(`The entered marks are : ${marks} and the grade is "C"`);
     }
    else 
    {
        console.log(`The entered marks are : ${marks} and the grade is "D"`);
    }