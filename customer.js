class Customer{
// CustomerID
// CustomerName
// CustomerPhoneNumber
// CustomerAddress
// CustomerAccountNo
// CustomerEmail
// CustomerBalance

    constructor(CustomerID,CustomerName,CustomerPhoneNumber,CustomerAddress,CustomerAccountNo,CustomerEmail,CustomerBalance){
            this.CustomerID =CustomerID;
            this.CustomerName =CustomerName;
            this.CustomerPhoneNumber =CustomerPhoneNumber;
            this.CustomerAddress =CustomerAddress;
            this.CustomerAccountNo =CustomerAccountNo;
            this.CustomerEmail =CustomerEmail;
            this.CustomerBalance =CustomerBalance;
    }

depositmoney(amount){ 
this.CustomerBalance = this.CustomerBalance + amount
}

withdrawnmoney(amount){
if(this.CustomerBalance >= amount){

    this.CustomerBalance = this.CustomerBalance-amount
}
  else{
console.log("you don`t have enough balance")

  }  
}

}
const c1 = new Customer(18,"Nilaxsh","0779592524","pointpedro","80978675","nilaxsakana@gmail.com",1000)
const c2 = new Customer(17,"Kabinaya","0770654321","jaffna","80907980","kabinakana@gmail.com",20000)
console.log(c1)
console.log(c2)
console.log(c1.depositmoney(2000))
console.log(c1.CustomerBalance)