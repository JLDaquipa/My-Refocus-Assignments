
// initialize balance with 0 value
let balance = 0;

function createBankAccount(name,amount,callback){

    console.log(`Welcome ${name}\n`);

    callback(amount);

}

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

createBankAccount("Jay Lloyd",200,depositAmount);
createBankAccount("Jay Lloyd",150,withdrawAmount);
createBankAccount("Jay Lloyd",0,checkBalance);