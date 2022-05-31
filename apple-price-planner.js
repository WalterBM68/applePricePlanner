function applePrices(){

    let costPerBox = 0;
    let numberOfApplesInBox = 0;
    let theParcketSize = 0;
    let requiredProfit = 0;

    function setBoxPrice(pricePerBox){
        costPerBox = pricePerBox;
    }

    function getBoxPrice(){
        return costPerBox;
    }

    function setHowManyApplesInBox(appleNumber){
        numberOfApplesInBox = appleNumber;
    }

    function getHowManyApplesInBox(){
        return numberOfApplesInBox;
    }

    function setParcketSize(sizeOfParcket){
        theParcketSize = sizeOfParcket;
    }

    function getParcketSize(){
        return theParcketSize;
    }
    function theProfit(){

    }
    
    return{
        setBoxPrice,
        getBoxPrice,
        setHowManyApplesInBox,
        getHowManyApplesInBox,
        setParcketSize,
        getParcketSize,
        theProfit
    }
}