var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car Engine Started");
    };
    return Car;
}());
var firstCar = new Car("Toyota", "Camry", 2003);
console.log(firstCar.make);
