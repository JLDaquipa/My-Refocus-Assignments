
let invoiceList = [
    "invoice 008",
    "invoice 007",
    "invoice 006",
    "invoice 005"
];


function inserToBottom(){

}

function reverseList(){

    invoiceList.reverse();

}

invoiceList.push("Invoice 004");
invoiceList.push("Invoice 003");
invoiceList.push("Invoice 002");
invoiceList.push("Invoice 001");

console.log(invoiceList.join(" "));
reverseList();
console.log(invoiceList.join(" "));