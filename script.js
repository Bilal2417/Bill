function calcBill(){
let bill;
let pricePerUnit;
let tax;
let taxPercent;
let totalBill;
let currentBill;
var totalFpa;
var fuelPrice;
var FsurCharge;
var surCharge;
var meterRent;
var electricityFee;
var Gst;
var dCode;
let Tv = 35;
let dueDate;
let firstTotal;
let secondTotal;
let Discount;
let dPer;
let billDiscount;
let finalTotal;
let units =document.getElementById("myUnits").value;
let vCode = document.getElementById("Vcode").value
console.log(vCode)
    if(units < 200){

        bill =0;
        pricePerUnit =0;
        meterRent = Math.floor(Math.random()*30);
        tax =0;
        taxPercent =0;
        totalBill =0;
        FsurCharge = 0;
        dueDate = 0;
        surCharge = 0;
        let lowerUnits = units;
        fuelPrice = Math.floor(Math.random()*350);
        electricityFee = Math.floor(Math.random()*350);
        Gst = Math.floor(Math.random()*2000);
        console.log("Your total bill is: Rs",bill);
        console.log("Price per unit is : Rs",pricePerUnit);
        console.log("Calculated tax is: Rs",tax);
        console.log("Tax applied on this bill is :",taxPercent,"%");
        document.getElementById("billCost").textContent = bill;
        document.getElementById("unitPrice").textContent = pricePerUnit;
        document.getElementById("incomeTax").textContent = tax;
        document.getElementById("taxpercent").textContent = taxPercent;
        document.getElementById("meterRent").textContent = meterRent;
        document.getElementById("FuelPrice").textContent = fuelPrice;
        document.getElementById("fSurcharge").textContent = FsurCharge;
        firstTotal = meterRent + fuelPrice;
        document.getElementById("FirstTotal").textContent = firstTotal;
        document.getElementById("elecDuty").textContent = electricityFee;
        document.getElementById("tv").textContent = Tv;
        document.getElementById("gst").textContent = Gst;
        secondTotal =  electricityFee + Gst + Tv;
        document.getElementById("SecondTotal").textContent = secondTotal;
        currentBill = firstTotal + secondTotal;
        document.getElementById("CurrentBill").textContent = currentBill;
        totalFpa = -currentBill
        document.getElementById("fpa").textContent = totalFpa;
        document.getElementById("duedate").textContent = dueDate;
        document.getElementById("surcharge").textContent = surCharge;
        finalTotal = "FREE"
      document.getElementById("duedate").innerHTML = "FREE";
      document.getElementById("finaltotal").innerHTML = "FREE";
      document.getElementById("lowerUnits").textContent = units;
        }
        else{
         if(units >= 200 && units < 300){
        pricePerUnit = 15;
        tax =( ( units * pricePerUnit)*15)/100;    /*20% tax*/
        taxPercent = 20;
        }
        else if(units >= 300 && units < 400){
            pricePerUnit = 20;
            tax =( ( units * pricePerUnit)*20)/100;   /*25% tax*/
            taxPercent = 25;
        }
        else if(units >= 400 && units < 500){
            pricePerUnit = 30;
            tax =( ( units * pricePerUnit)*30)/100;   /*35% tax*/
            taxPercent = 35;
        }
        else if(units >= 500 && units < 700){
            pricePerUnit = 40;
            tax =( ( units * pricePerUnit)*40)/100;    /*45% tax*/
            taxPercent = 45;
        }
        else if(units>=700 && units<1000){
            pricePerUnit = 55;
            tax =( ( units * pricePerUnit)*50)/100;    /*50% tax*/
            taxPercent = 50;
        }
        else {
            pricePerUnit = 75;
            tax = ( ( units * pricePerUnit)*60)/100;    /*65% tax*/
            taxPercent = 65;
        }
        bill = units * pricePerUnit;
        totalBill = bill + tax;
        console.log("Consumed units are: ",units)
        console.log("Your total bill is: Rs",bill)
        console.log("Price per unit is : Rs",pricePerUnit)
        console.log("Calculated tax is: Rs",tax)
        console.log("Tax applied on this bill is :",taxPercent,"%")
        console.log("Bill after applying tax is : Rs",totalBill)
        
        meterRent = Math.floor(Math.random()*30);
        fuelPrice = Math.floor(Math.random()*350);
        FsurCharge = Math.ceil(Math.random()*2500);
        electricityFee = Math.floor(Math.random()*350);
        Gst = Math.floor(Math.random()*2000);
        document.getElementById("meterRent").textContent = meterRent;
        document.getElementById("FuelPrice").textContent = fuelPrice;
        document.getElementById("fSurcharge").textContent = FsurCharge;
        firstTotal = bill + meterRent + fuelPrice +FsurCharge;
        document.getElementById("FirstTotal").textContent = firstTotal;
        document.getElementById("elecDuty").textContent = electricityFee;
        document.getElementById("tv").textContent = Tv;
        document.getElementById("gst").textContent = Gst;
        secondTotal = tax + electricityFee + Gst + Tv;
        document.getElementById("SecondTotal").textContent = secondTotal;
        currentBill = firstTotal + secondTotal;
        document.getElementById("CurrentBill").textContent = currentBill;
        document.getElementById("billCost").textContent = bill;
        document.getElementById("unitPrice").textContent = pricePerUnit;
        document.getElementById("incomeTax").textContent = tax;
        document.getElementById("taxpercent").textContent = taxPercent;
        
        totalFpa = Math.ceil(Math.random()*500);
        surCharge = Math.ceil(Math.random()*3000);
  
        document.getElementById("fpa").textContent = totalFpa;
        document.getElementById("surcharge").textContent = surCharge;


        dueDate = Math.ceil(currentBill + totalFpa);
        if(vCode == "BILLY" || vCode =="WP3G6" || vCode == "A8SJ5" || vCode == "J3VC4" || vCode == "KW2N8" || vCode == "PS9B5"
           || vCode == "OWB4I" || vCode == "MUZAN" || vCode == "ISB38" || vCode == "7W3PS" || vCode == "RB3F7"){
            dCode = vCode;
            dPer = "0%";
        }
        else if(vCode =="" ||vCode == " " || vCode == "  " || vCode == "   " || vCode == "    " || vCode == "     "){
            dCode = "XXXXX"
            console.log(vCode)
              dPer = "0%";
        }
        else{
            dCode = "INVALID";
               dPer = "0%"
        }
        console.log(dCode)
        if(dCode == "BILLY"){
            Discount = Math.round((dueDate*50)/100);
            dPer = "50%"
        }
        else if(dCode == "WP3G6" || dCode == "A8SJ5" || dCode == "J3VC4" || dCode == "KW2N8" || dCode == "PS9B5"){
            Discount = Math.round((dueDate*15)/100);
            dPer = "15%"
        }
        else if(dCode == "OWB4I" || dCode == "MUZAN" || dCode == "ISB38" || dCode == "7W3PS" || dCode == "RB3F7"){
            Discount = Math.round((dueDate*25)/100);
            dPer = "25%"
        }
        else{
            Discount = 0;
        }
        billDiscount = dueDate - Discount;
        document.getElementById("Dcode").textContent = dCode;
        document.getElementById("dper").textContent = dPer;
        document.getElementById("discount").textContent = Discount;
        document.getElementById("BillDiscount").textContent = billDiscount;
        // finalTotal = billDiscount + surCharge;
        console.log(finalTotal)
        finalTotal = billDiscount + surCharge;
        let lowerUnits = units;
 document.getElementById("duedate").textContent = dueDate;
 document.getElementById("finaltotal").textContent = finalTotal;
 document.getElementById("lowerUnits").textContent = units;
        return false;
    }
    }


    // let number = prompt("Type any number: " )
    // if ( number%2==0){
//     console.log("number is even")
// }
// else{
//     console.log("number is odd")
// }

// number%2==0 ? console.log("number is even") : console.log("number is odd");

// switch(true){
// case number % 2 == 0:
//     console.log("number is even");
//     break;
//     case number % 2 != 0:
//         console.log("number is odd")
//         break;
// }
 