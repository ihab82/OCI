var customerProfile = /** @class */ (function () {
    function customerProfile() {
        this.customerSalary = 0;
        this.customerTax = 0.15;
        this.customerYOB = 1982;
    }
    customerProfile.prototype.getCustomerName = function (fName, lName) {
        this.customerName = fName + " " + lName;
        return this.customerName;
    };
    customerProfile.prototype.getCustomerSalary = function (sal) {
        this.customerSalary = sal;
        return this.customerSalary;
    };
    customerProfile.prototype.getCustomerDOB = function (day, month, year) {
        var cusDOB;
        if (this.customerYOB == 0) {
            cusDOB = day + "/" + month + "/" + year;
        }
        else {
            cusDOB = day + "/" + month + "/" + this.customerYOB;
        }
        return cusDOB;
    };
    customerProfile.prototype.getCustomerTax = function (tax) {
        if (tax != undefined)
            return this.customerSalary * tax;
        return this.customerSalary * this.customerTax;
    };
    return customerProfile;
}());
var cusProfile = new customerProfile();
console.log("Customer Name: " + cusProfile.getCustomerName("Ihab", "Mohamad Kassem"));
console.log("Customer DOB: " + cusProfile.getCustomerDOB(21, 4, 1980));
console.log("Customer Salary: " + cusProfile.getCustomerSalary(22000) + "$ - Customer Tax: " + cusProfile.getCustomerTax(.33) + "$");
var netSala = function (tax) {
    return cusProfile.customerSalary -= (cusProfile.customerSalary * tax);
};
console.log("Customer Net Salary: " + netSala(.4) + "$");
var strCount;
for (strCount = 0; strCount < cusProfile.getCustomerName("Mohamad", "Ihab").length; strCount++) {
    console.log((strCount + 1) + ". " + cusProfile.getCustomerName("Mohamad", "Ihab").charAt(strCount) + " : " +
        cusProfile.getCustomerName("Mohamad", "Ihab").charCodeAt(strCount));
}
