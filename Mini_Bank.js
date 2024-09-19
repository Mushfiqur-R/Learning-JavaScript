const prompt=require("prompt-sync")()// user input  console neyar jonne ei line.  nahole prompt web vertion e input ney. 
console.log("Welcome to MINI Bank");
let answer=prompt("DO you have any Account?Yes/No Give Answer : ");
let username;
let Password;
let balance;
let ammount=0;
if(answer=="No")
{
    let useropinion=prompt("Create your Account First!!!! Want to Create??Yes/No?? ");
    if(useropinion=="Yes")
    {
        username= prompt("Give name:");
        Password=prompt("Give a Strong Password");
        console.log(" Account Succesfully Created.");
    }
    

}
 answer=prompt("DO you Want to Signin?Yes/No ");
if(answer=="Yes")
    {
        console.log("Enter your valid username & Password");
       let usernameinput=prompt("Enter username:");
       let passwordinput=prompt("Enter Password:")
    if(username=usernameinput && Password==passwordinput)
    {
        console.log(`Welcome to  the MINI bank ${usernameinput}`);
       
        console.log("1.Cashout");
        console.log("2.Cashin");
        console.log("3.Withdraw");
        console.log("4.Check_Balance");
        let service_input=prompt("Select which service you prefer:");
        switch(service_input)
        {
            
            case "1":
                ammount =prompt("Enter cashout ammount : ");
                balance-=ammount;
                break;
            case "2":
                ammount=prompt("Cashin Ammount : ")
                balance+=ammount;
                console.log(`Cash in successfull...Current Balance is ${balance}`);
                break;
        } 
    }
    else
    {
        console.log("Invalid username & password");
    }
    }

