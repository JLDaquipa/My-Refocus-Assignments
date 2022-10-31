
function createBankAccount(name){

    // initialize balance with 0 value
    let balance = 0;

    console.log(`Welcome ${name}\n`);


    function depositAmount(amount){
        balance += amount;
        console.log(`You deposited ₱${amount} to your account. Your new balance is ₱${balance}.`)
    }

    function withdrawAmount(amount){

        if(balance < amount){ // check if the balance is less than the amount to withdraw
            console.log(`Your balance is insufficient. You only have ₱${balance} in your account.`)
        }else{
            balance -= amount;
            console.log(`You withdrawed ₱${amount} to your account. Your new balance is ₱${balance}.`)
        }
    }

    function checkBalance(){
        console.log(`Your balance is ₱${balance}.`)
    }

    return{depositAmount,withdrawAmount,checkBalance};

}

let bankAccount = createBankAccount("Jay Lloyd");

bankAccount.depositAmount(500);
bankAccount.withdrawAmount(100);
bankAccount.withdrawAmount(250);
bankAccount.withdrawAmount(200);
bankAccount.checkBalance();



