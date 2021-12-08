/*
* File: car.ts/js
* Author: Madarász Dávid
* Copyright: 2021, Madarász Dávid
* Group: Szoft II
* Date: 2021-12-02
* Github: https://github.com/afriyy/
* Licenc: GNU GPL
*/
var Car = /** @class */ (function () {
    function Car(id, plate, color, brand, year, capacity, fuel, price, sold) {
        this.id = id;
        this.plate = plate;
        this.color = color;
        this.brand = brand;
        this.year = year;
        this.capacity = capacity;
        this.fuel = fuel;
        this.price = price;
        this.sold = sold;
    }
    return Car;
}());
