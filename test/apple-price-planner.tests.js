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
})