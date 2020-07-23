console.log("Print the marks and its grade");

/*
let marks = prompt(" Enter the marks out of 100");

switch(marks)
{
    case (marks >=75 && marks<=100)    
        console.log(`Your marks are : ${marks} and the grade is "A"`):
    break;

    case (marks >=50 && marks<=74):
    
        console.log(`Your marks are : ${marks} and the grade is "B"`);
    break; 

       case (marks >=35 && marks<=49):
     
         console.log(`Your marks are : ${marks} and the grade is "C"`);
     break;

    default:
    
        console.log(`Your marks are : ${marks} and the grade is "D"`);
    }
    */
    
    // Ternary
     
    let marks = window.prompt(" Enter the marks out of 100");

    let result = (marks >=75 && marks<=100) ? ` Your marks are : ${marks} and the grade is "A" ` :
     (marks >=50 && marks<=74) ? `Your marks are : ${marks} and the grade is "B"` :
     (marks >=35 && marks<=49) ? `Your marks are : ${marks} and the grade is "C"` : 
     `Your marks are : ${marks} and the grade is "D"`;
     
     console.log(result);
