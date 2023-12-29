class Bank {
 bankID;
 Name;
 Location;

constructor(bankID,Name,Location){
this.bankID = bankID;
this.Name = Name;
this.Location= Location;
}


getName(){

    return this.Name
}
getLocation(){

    return this.Location
}
}
const B1 = new Bank(`03`,`Boc` ,`Jaffna`);
const B2 = new Bank(`04`,`HNB`,`pointpedro`);
const Name = B1.getName();
console.log(Name);