var dob = prompt("In What Year Where You Born?",1996);
if(dob<1800){
	dob = 1996;
}
//Birth Year Stored In dob variable
var cyear = new Date().getFullYear();
var fd = cyear + 10;
var fdate = prompt("What Future Date Would You Like To Calculate?",fd);
if(fdate<<=cyear){
	fdate = fd;
}
//Future Date Stored in fdate variable
var fage = fdate - dob;
//First and likely future age stored in fage variable
var fage2 = fage - 1;
//Second Age Assuming User's Birthday hasn't reached yet but are in futre date stored in fage2 variable
var cage = cyear-dob;
//Current Age Stored In cage variable
var mage = 100;
//Maximum age value stored in mage variable
var eamount = 20;
//Estimated amount per day set to 20 and stored in eamount variable
var etotal = (eamount * 365) * (mage-cage);
console.log("You will need " + etotal + " to last you until the ripe old age of " + mage);
