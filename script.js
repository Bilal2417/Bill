function calcBill(){
let bill;
let pricePerUnit;
let tax;
let taxPercent;
let totalBill;
let currentBill;
var totalFpa;
var FsurCharge;
var surCharge;
var meterRent;
var electricityFee;
let Tv = 35;
let dueDate;
let firstTotal;
let secondTotal;
let finalTotal;
let units =document.getElementById("myUnits").value;

    if(units < 200){

        bill =0;
        pricePerUnit =0;
        meterRent = Math.floor(Math.random()*30);
        tax =0;
        taxPercent =0;
        totalBill =0;
        FsurCharge = 0;
        firstTotal = meterRent;
        dueDate = 0;
        surCharge = 0;
        let lowerUnits = units;
        electricityFee = Math.floor(Math.random()*350);
        console.log("Your total bill is: Rs",bill);
        console.log("Price per unit is : Rs",pricePerUnit);
        console.log("Calculated tax is: Rs",tax);
        console.log("Tax applied on this bill is :",taxPercent,"%");
        document.getElementById("billCost").textContent = bill;
        document.getElementById("unitPrice").textContent = pricePerUnit;
        document.getElementById("incomeTax").textContent = tax;
        document.getElementById("taxpercent").textContent = taxPercent;
        document.getElementById("meterRent").textContent = meterRent;
        document.getElementById("fSurcharge").textContent = FsurCharge;
        document.getElementById("FirstTotal").textContent = firstTotal;
        document.getElementById("elecDuty").textContent = electricityFee;
        document.getElementById("tv").textContent = Tv;
        secondTotal = electricityFee + Tv;
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
            console.log("Please use less Electricity");
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
        FsurCharge = Math.ceil(Math.random()*2500);
        electricityFee = Math.floor(Math.random()*350);
        document.getElementById("meterRent").textContent = meterRent;
        document.getElementById("fSurcharge").textContent = FsurCharge;
        firstTotal = bill + meterRent +FsurCharge;
        document.getElementById("FirstTotal").textContent = firstTotal;
        document.getElementById("elecDuty").textContent = electricityFee;
        document.getElementById("tv").textContent = Tv;
        secondTotal = tax + electricityFee + Tv;
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

        dueDate = currentBill + totalFpa;
        finalTotal = dueDate + surCharge;
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
 