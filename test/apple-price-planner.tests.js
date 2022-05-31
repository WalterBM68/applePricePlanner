describe('The Apple Price Planner App', function(){

    it ('should be able to set the price of the box of apples', function() {
		const applePlanner = applePrices();

        applePlanner.setBoxPrice(5.50);
		assert.equal(5.50, applePlanner.getBoxPrice());
	});
    it ('should be able to set the number of apples that are in the box', function() {
		const applePlanner = applePrices();

        applePlanner.setHowManyApplesInBox(15);
		assert.equal(15, applePlanner.getHowManyApplesInBox());
	});
    it ('should be able to set the parcket size of apples the apple were sold in', function() {
		const applePlanner = applePrices();

        applePlanner.setParcketSize(4);
		assert.equal(4, applePlanner.getParcketSize());
	});
    it ('should be able to calculate cost price per apple', function() {
		const applePlanner = applePrices();

        applePlanner.setBoxPrice(100);
        applePlanner.setHowManyApplesInBox(10);

		assert.equal(10, applePlanner.costPricePerApple());
	});
    it ('should be able to calculate number of packets', function() {
		const applePlanner = applePrices();

        applePlanner.setHowManyApplesInBox(20);
        applePlanner.setParcketSize(2);

		assert.equal(10, applePlanner.numberOfPackets());
	});
    it ('should be able to calculate cost per packet', function() {
		const applePlanner = applePrices();

        applePlanner.setHowManyApplesInBox(20);
        applePlanner.setParcketSize(2);

		assert.equal(40, applePlanner.costPerPacket());
	});
})