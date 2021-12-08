/*
* File: app.ts/js
* Author: Madarász Dávid
* Copyright: 2021, Madarász Dávid
* Group: Szoft II
* Date: 2021-12-02
* Github: https://github.com/afriyy/
* Licenc: GNU GPL
*/


var Cars = [];
var url = "http://localhost:3000/cars";

fetch(url)
.then(res=>res.json())
.then(data=>{
    console.log(data);
    createCar(data);
    createParagraphs(Cars);
});



function createCar(data){
    for(var i = 0;i < data.length;i++){
        var car = new Car(data[i].id,data[i].plate,data[i].color,data[i].brand,data[i].year,data[i].capacity,data[i].fuel,data[i].price,data[i].sold);
        Cars.push(car);
    }
}

function createParagraphs(Cars){
    for(var i = 0;i < Cars.length;i++){
        var container = document.querySelector('#lista');
        var li=document.createElement('li');
        li.innerHTML = Cars[i].plate;
        li.setAttribute('class','list-group-item list-group-item-success');
        container.appendChild(li);
    }
}