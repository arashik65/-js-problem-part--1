//unit covertation -----> inch to feet-----> 12 inch 1 feet
function inchToFeet(inch){
    const feet = inch/12;
    return feet;
}
const shuuvoHeight = inchToFeet(75);
console.log(shuuvoHeight);


function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12 ;
    const result = feetNumber + ' fit ' + inchRemaining + '  inch .';
    return result ;
}

const shuuvoHeight2 = inchToFeet2(75);
console.log(shuuvoHeight2);


//miles to kilometer
function milToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const miletokilometer =milToKilometer(4);
console.log(miletokilometer);


//kilometer to miles
function kilometerToMiles(kilo){
    const mile = kilo*0.62137;
    return mile;
}
const kilometertomile = kilometerToMiles(2);
console.log(kilometertomile);