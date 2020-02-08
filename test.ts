class customerProfile{
    customerName:string;
    customerSalary:number=0;
    customerTax:number=0.1;
    customerYOB:number=0;
    getCustomerName(fName:string, lName:string):string{
        this.customerName = fName + " " + lName;
        return this.customerName;
    }
    getCustomerSalary(sal:number):number{
        this.customerSalary = sal;
        return this.customerSalary;
    }
    getCustomerDOB(day:number, month:number, year?:number):string{
        var cusDOB:string;
        if (this.customerYOB==0)
        {
            cusDOB = day + "/" + month + "/" + year 
        }
        else{
            cusDOB = day + "/" + month + "/" + this.customerYOB;
        }
        return cusDOB; 
    }
    getCustomerTax(tax?:number):number{
        if (tax!=undefined)
        return this.customerSalary * tax;
        return this.customerSalary * this.customerTax;
    }
}
var cusProfile = new customerProfile();
console.log("Customer Name: " + cusProfile.getCustomerName("Ihab", "Kassem"));
console.log("Customer DOB: " + cusProfile.getCustomerDOB(21,4,1980));
console.log("Customer Salary: " + cusProfile.getCustomerSalary(22000) + "$ - Customer Tax: " + cusProfile.getCustomerTax(.33) + "$")
var netSala = (tax:number)=>{
    return cusProfile.customerSalary-=(cusProfile.customerSalary*tax);
}
console.log("Customer Net Salary: " + netSala(.4) + "$")
var strCount:number;
for (strCount=0;strCount<cusProfile.getCustomerName("Mohamad","Ihab").length;strCount++)
{
    console.log((strCount+1) + ". " + cusProfile.getCustomerName("Mohamad","Ihab").charAt(strCount) + " : " +
    cusProfile.getCustomerName("Mohamad","Ihab").charCodeAt(strCount)
    )
}
