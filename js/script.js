function Phone(brand, price, color, memory) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.memory = memory;
}
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ", and memory is " + this.memory +
        ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", 64);
var samsungS6 = new Phone("Samsung", 1400, "gold", 8);
var onePlusOne = new Phone("OnePlusOne", 2400, "black", 8);