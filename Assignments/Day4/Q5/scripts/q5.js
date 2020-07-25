
let sale_earned= +(prompt("Please enter the amount of Sales made for the year"));
if(sale_earned > 0 && sale_earned<=5000)
{
    let comm= sale_earned*0.02;
    alert("Your Commision is :  "+ comm +" and total earning is : " +(comm+sale_earned));
    // console.log("Your Commision is :  ",comm+sale_earned);
 
}

else if(sale_earned > 5000 && sale_earned<=10000)
{
    let comm= sale_earned*0.05;
    alert("Your Commision is :  "+ comm +" and total earning is : " +(comm+sale_earned));
    // console.log("Your Commision is :  ",comm+sale_earned);
}

else if(sale_earned > 10000 && sale_earned<=20000)
{
    let comm= sale_earned*0.07;
    alert("Your Commision is :  "+ comm +" and total earning is : " +(comm+sale_earned));
    // console.log("Your Commision is :  ",comm+sale_earned);
}

else
{
    let comm= sale_earned*0.10;
    alert("Your Commision is :  "+ comm +" and total earning is : " +(comm+sale_earned));
    // console.log("Your Commision is :  ",comm+sale_earned);
}