const {Shop, Item} = require("../src/gilded_rose");

describe("Quality degradation tests", function() {
  test("degrade one item quality", function() {
    const shop = new Shop([new Item("testItem", 1, 5)]);
    const items = shop.updateQuality();
    expect(items[0].quality).toEqual(4);
  });

  test("double degrade one item quality after expiration date", function() {
    const shop = new Shop([new Item("testItem", 0, 5)]);
    const items = shop.updateQuality();
    expect(items[0].quality).toEqual(3);
  });
});

const negativeQualityItems = [
  {
    item: new Item("Guinsoo", 15, 0),
    expectedQuality: 0,
  },
  {
    item: new Item("Last Whisper", 0, 0),
    expectedQuality: 0,
  },
  {
    item: new Item("Rabadon", 4, 0),
    expectedQuality: 0,
  },
];


describe.each(negativeQualityItems)(`Quality no degradation tests`, (data) => {
  test(`Item quality should not change because it's already at 0`, () => {
    const shop = new Shop([data.item]);
    const items = shop.updateQuality();
    expect(items[0].quality).toBeGreaterThanOrEqual(data.expectedQuality);
  });
});


const maxedQualityItems = [
  {
    item: new Item("Aged Brie", 10, 50),
    expectedQuality: 50,
  },
  {
    item: new Item("Getsuga Tensho", 10, 80),
    expectedQuality: 49,
  }
];


describe.each(maxedQualityItems)(`50 should be the max quality`, (data) => {
  test(`Item quality should not exceed 50`, () => {
    const shop = new Shop([data.item]);
    const items = shop.updateQuality();
    expect(items[0].quality).toBe(data.expectedQuality);
  });
});

const agedBrieItems = [
  {
    item: new Item("Aged Brie", 10, 15),
    expectedQuality: 16,
  },
  {
    item: new Item("Aged Brie", 10, 0),
    expectedQuality: 1,
  },
];


describe.each(agedBrieItems)(`Quality improve for Brie`, (data) => {
  test(`Aged Brie quality should be upgraded`, () => {
    const shop = new Shop([data.item]);
    const items = shop.updateQuality();
    expect(items[0].quality).toBe(data.expectedQuality);
  });
});

describe("Sulfuras test", function() {
  test("Sulfuras quality should not change", function() {
    const shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 10)]);
    const items = shop.updateQuality();
    expect(items[0].quality).toEqual(10);
  });

  test("Sulfuras expiration date should not change", function() {
    const shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 10)]);
    const items = shop.updateQuality();
    expect(items[0].sellIn).toEqual(10);
  });
});


const backstageTickets = [
  {
    item: new Item("Backstage passes to a TAFKAL80ETC concert", 17, 35),
    expectedQuality: 36,
    sellInExpected: 16
  },
  {
    item: new Item("Backstage passes to a TAFKAL80ETC concert", 8, 35),
    expectedQuality: 37,
    sellInExpected: 7
  },
  {
    item: new Item("Backstage passes to a TAFKAL80ETC concert", 4, 35),
    expectedQuality: 38,
    sellInExpected: 3
  },
  {
    item: new Item("Backstage passes to a TAFKAL80ETC concert", 0, 35),
    expectedQuality: 0,
    sellInExpected: -1
  },
];


describe.each(backstageTickets)(`Backstage Pass`, (data) => {
  test(`Backstage Pass quality values must be increased proportionnaly or be reset`, () => {
    const shop = new Shop([data.item]);
    const items = shop.updateQuality();
    expect(items[0].quality).toBe(data.expectedQuality);
    expect(items[0].sellIn).toBe(data.sellInExpected);  
  });
});