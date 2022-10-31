
const userAccount = {
    "bankAccount": {
        "bankAccountID": parseInt(Math.random() * 1000), // generate random number between 0 - 1000
        "accountNumber": "1525354555",
        "credentials": ["jlbank","password123","55555"],
        "balance": 1000,
        "createdAt": "September 5, 2022"
    },
    "debitCard": "1948270498572894",
    "firstName": "Jack",
    "lastName": "Anderson",
    "birthDate": "September 15, 1990",
    "validID": ["Driver's license", "L01-55-555555"],
    "address": "Panabo City, Davao del Norte"
}

function getBankAccountDetails(username,password){

    //check if the username and password are correct
    if(username === userAccount.bankAccount.credentials[0] && password === userAccount.bankAccount.credentials[1]){
console.log(`Bank Account ID: ${userAccount.bankAccount.bankAccountID}
Account Number: ${userAccount.bankAccount.accountNumber}
Balance: ₱${userAccount.bankAccount.balance}
Account created: ${userAccount.bankAccount.createdAt}
`)
    }else{
        console.log("Invalid Username or Password. Please Try Again!")
    }
}

function withdrawMoney(username,password,amount,accountNumber){
    //check if the username and password are correct
    if(username === userAccount.bankAccount.credentials[0] && password === userAccount.bankAccount.credentials[1]){
        //check if the account number is correct
        if(accountNumber === userAccount.bankAccount.accountNumber){
            // check if the balance is less than the amount to withdraw. Withdraw failed if true
            if(userAccount.bankAccount.balance < amount){
                console.log("You have insufficient balance to withdraw.");
            }else{
                userAccount.bankAccount.balance -= amount;
                console.log(`You successfully withdrawed ₱${amount} to your bank account. Your new balance is ₱${userAccount.bankAccount.balance}`)
            }
        }else{
            console.log("Invalid account number")
        }
    }else{
        console.log("Invalid Username or Password. Please Try Again!")
    }
}

function depositMoney(username,password,amount,accountNumber){
    //check if the username and password are correct
    if(username === userAccount.bankAccount.credentials[0] && password === userAccount.bankAccount.credentials[1]){
        //check if the account number is correct
        if(accountNumber === userAccount.bankAccount.accountNumber){
            userAccount.bankAccount.balance += amount;
                console.log(`You successfully deposited ₱${amount} to your bank account. Your new balance is ₱${userAccount.bankAccount.balance}`);
        }else{
            console.log("Invalid account number")
        }
    }else{
        console.log("Invalid Username or Password. Please Try Again!")
    }
}



let bankUsernameInput = "jlbank";
let bankPasswordInput = "password123";
let accountNumberInput = "1525354555";

getBankAccountDetails(bankUsernameInput, bankPasswordInput);
withdrawMoney(bankUsernameInput,bankPasswordInput,500,accountNumberInput);// withdrawing 500 with user input account number
depositMoney(bankUsernameInput,bankPasswordInput,2000,accountNumberInput);// depositing 2000 with user input account number
getBankAccountDetails(bankUsernameInput, bankPasswordInput);

