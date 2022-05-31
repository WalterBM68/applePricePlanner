function applePrices(){

    let costPerBox = 0;
    let numberOfApplesInBox = 0;
    let theParcketSize = 0;
    let requiredProfit = 0;

    let pricePerApple = 0;
    let packetsNumber = 0;
    let packetCost = 0;

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

    //calculations
    function costPricePerApple(){
        pricePerApple = costPerBox / numberOfApplesInBox;
        return pricePerApple.toFixed(2);
    }

    function numberOfPackets(){
       packetsNumber = numberOfApplesInBox / theParcketSize;
       return packetsNumber.toFixed(2);
    }

    function costPerPacket(){
        packetCost = pricePerApple * theParcketSize;
        return packetCost.toFixed(2);
    }

    function theRequiredProfit(){
      let convet =  requiredProfit / 100;
      let total = costPerBox * convet;
      let totalAmount = total + costPerBox;
      let newTotal = totalAmount / packetsNumber;
      return newTotal.toFixed(2);
    }
    
    return{
        setBoxPrice,
        getBoxPrice,
        setHowManyApplesInBox,
        getHowManyApplesInBox,
        setParcketSize,
        getParcketSize,
        costPricePerApple,
        numberOfPackets,
        costPerPacket,
        theRequiredProfit
    }
}