class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateItemQuality(item) {

    switch (item.name) {
      case 'Aged Brie':
        item.quality = item.sellIn < 0 ? (item.quality + 2) : ++item.quality;
        item.sellIn -= 1;
        break;

      case 'Backstage passes to a TAFKAL80ETC concert':
        var increasesBy = item.sellIn <= 5 ? 3 : item.sellIn <= 10 ? 2 : 1
        item.quality = item.sellIn <= 0 ? 0 : (item.quality + increasesBy);
        item.sellIn -= 1;
        break;
      case 'Sulfuras, Hand of Ragnaros':
        item = item
        break;
      case 'Conjured Mana Cake':
        item.quality = item.sellIn > 0 ? (item.quality - 2) : (item.quality - 4);
        item.sellIn -= 1;
        break;
      default:
        item.quality = item.sellIn > 0 ? --item.quality : (item.quality - 2);
        item.sellIn -= 1;
    }

    item.quality = Math.min(Math.max(item.quality, 0), 50);

    return item;
  }
  updateQuality() {
      var items = this.items.map((item) => {
        return this.updateItemQuality(item);
      });

    return items;
  }
}

module.exports = {
  Shop : Shop,
  Item: Item
};
