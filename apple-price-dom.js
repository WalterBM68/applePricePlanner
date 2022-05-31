const calculateBtn = document.querySelector('.calculateBtn');

const numberOfPackets = document.querySelector('.number-of-packets');
const costOfApple = document.querySelector(".cost-of-apple");
const packetCost = document.querySelector('.packet-cost');
const recommendedPrice = document.querySelector('.recommended-price');

let theAppleApp = applePrices();


calculateBtn.addEventListener('click', function(){
    const priceOfAppleBox = document.querySelector(".price-of-apple-box").value;
    const numberOfApplesInBox = document.querySelector('.number-of-apples-in-box').value;
    const packetSize = document.querySelector('.packet-size').value;
    const profit = document.querySelector('.profit').value;

    theAppleApp.setBoxPrice(Number(priceOfAppleBox));
    theAppleApp.setHowManyApplesInBox(Number(numberOfApplesInBox));
    theAppleApp.setParcketSize(Number(packetSize));

    theAppleApp.numberOfPackets();
    numberOfPackets.innerHTML = theAppleApp.numberOfPackets();
    
    costOfApple.innerHTML = theAppleApp.costPricePerApple();

    packetCost.innerHTML = theAppleApp.costPerPacket();

    recommendedPrice.innerHTML = theAppleApp.theRequiredProfit();
 
});