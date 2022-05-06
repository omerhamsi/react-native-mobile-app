const User=require("../models/userModel")
const cityData=[
  {
    //name: "darıca",
    latitude: 40.7739,
    longitude: 29.4003
},
{
    //name: "çayırova",
    latitude: 40.8242,
    longitude: 29.3722
},
{
    //name: "gebze",
    latitude: 40.8025,
    longitude: 29.4398
},
{
    //name: "dilovası",
    latitude: 40.7876,
    longitude: 29.5442
},
{
    //name: "körfez",
    latitude: 40.7764,
    longitude: 29.7377
},
{
    //name: "derince",
    latitude: 40.7562,
    longitude: 29.8309
},
{
    //name: "izmit",
    latitude: 40.7654,
    longitude: 29.9408
},
{
    //name: "kou",
    latitude: 40.8222,
    longitude: 29.9217
},
{
    //name: "kandıra",
    latitude: 41.0704,
    longitude: 30.1524
},
{
    //name: "kartepe",
    latitude: 40.7534,
    longitude: 30.0232
},
{
    //name: "başiskele",
    latitude: 40.6298,
    longitude: 29.9509
},
{
    //name: "gölcük",
    latitude: 40.7168,
    longitude: 29.8195
},
{
    //name: "karamürsel",
    latitude: 40.6913,
    longitude: 29.6164
}
    ]
module.exports.getLogin=function(req,res){
     User.controlUser().then((result)=>{
         let control=0
         result.map((item)=>{
             if(item.name === req.body.name && item.password === req.body.password){
                 control=1
             }
         })
         if(control === 1){
             res.send("200")
         }else{
             res.send("400")
         }
         
     })
}
module.exports.chart=function(req,res){
    var customers=[]
  req.body.data.map((item)=>{
    console.log(item)
    customers.push(item)
  })
  let testCar = [{
    name: "darıca",
    lat: 40.6298,
    lng: 29.9509
},
{
    name: "çayırova",
    lat: 40.8242,
    lng: 29.3722
},
{
    name: "gebze",
    lat: 40.7739,
    lng: 29.4003
},
{
    name: "dilovası",
    lat: 40.7562,
    lng: 29.8309
},
{
    name: "körfez",
    lat: 40.7876,
    lng: 29.5442
},
{
    name: "derince",
    lat: 40.8025,
    lng: 29.4398
},
{
    name: "izmit",
    lat: 40.6298,
    lng: 29.9509
},
{
    name: "kou",
    lat: 40.6298,
    lng: 29.9509
},
{
    name: "kandıra",
    lat: 40.6298,
    lng: 29.9509
},
{
    name: "kartepe",
    lat: 40.6298,
    lng: 29.9509
},
{
    name: "başiskele",
    lat: 40.6298,
    lng: 29.9509
},
{
    name: "gölcük",
    lat: 40.7654,
    lng: 29.9408
},
{
    name: "karamürsel",
    lat: 40.69144,
    long: 29.61568
}
]
let firstCarData = []
let secondCarData = []
let thirdCarData = []

currentLocation = 0;
var distance = [12][13];
distance = [
[0, 6.86, 7.4, 18.9, 35.7, 44.6, 54.6, 59.9, 99.4, 66.8, 81.4, 80, 40.1],
[6.86, 0, 7.7, 21.2, 38.1, 47.0, 57, 62.6, 102, 69.2, 83.7, 68.8, 42.4],
[7.4, 7.7, 0, 12.4, 29.2, 38.2, 48.2, 53.7, 92.9, 60.4, 74.9, 60, 33.6],
[18.9, 21.2, 12.4, 0, 19.4, 27.6, 39.3, 44.1, 84.1, 51.5, 66.1, 60.3, 33.9],
[35.7, 38.1, 29.2, 19.4, 0, 9.6, 20, 25.3, 64.1, 32.2, 43.4, 41.9, 54.4],
[44.6, 47, 38.2, 27.6, 9.6, 0, 11, 16.2, 54.5, 23.2, 33.8, 32.3, 47],
[54.6, 57, 48.2, 39.3, 20, 11, 0, 9.1, 45.1, 13.8, 22.7, 20.1, 34.8],
[99.4, 102, 92.9, 84.1, 64.1, 54.5, 45.1, 46.9, 0, 52, 64.3, 62.8, 77.5],
[66.8, 69.2, 60.4, 51.5, 32.2, 23.2, 13.8, 22.1, 52, 0, 24.7, 24.8, 39.5],
[81.4, 83.7, 74.9, 66.1, 43.4, 33.8, 22.7, 34.5, 64.3, 24.7, 0, 30.6, 45.3],
[80, 68.8, 60, 60.3, 41.9, 32.3, 20.1, 33, 62.8, 24.8, 30.6, 0, 25.9],
[40.1, 42.4, 33.6, 33.9, 54.4, 47, 34.8, 47.6, 77.5, 39.5, 45.3, 25.9, 0]
];
//var customers = [0, 10, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0]
//var customers = [20, 5, 0, 10, 5, 0, 15, 5, 10, 15, 0, 5];
//var customers = [20, 5, 5, 10, 5, 5, 15, 5, 10, 10, 5, 5];
//var customers = [0, 0, 40, 0, 0, 0, 0, 0, 10, 0, 0, 50];

var car1 = { name: "car25", carCapacity: 25 },
car2 = { name: "car30", carCapacity: 30 },
car3 = { name: "car40", carCapacity: 40 },
rentCar = { name: "rentCar", carCapacity: 25 };

var cars = [car3, car2, car1];

var car1Visited = [],
car2Visited = [],
car3Visited = [],
rentCarVisited = [];

var group1 = { name: "group1", capacity: customers[0] + customers[1] + customers[2] + customers[3] },
group2 = { name: "group2", capacity: customers[4] + customers[5] + customers[6] + customers[7] },
group3 = { name: "group3", capacity: customers[8] + customers[9] + customers[10] + customers[11] };



var groupList = [group1, group2, group3];

var numberOfRentCar = 0;

var totalRentCost = 0;

for (let j = 0; j < groupList.length - 1; j++) {
if (groupList[j].capacity < groupList[j + 1].capacity) {
    let temp = groupList[j];
    groupList[j] = groupList[j + 1];
    groupList[j + 1] = temp;
}
}
/*

for (let i = 0; i < groupList.length - 1; i++) {
if (groupList[i].capacity > groupList[i + 1].capacity) {
    let temp = groupList[i];
    groupList[i] = groupList[i + 1];
    groupList[i + 1] = temp;
}
}
groupList.reverse();
*/
function allCustomersTaken(customers) {
var sum = 0;
for (i = 0; i < 12; i++) {
    sum = sum + customers[i];
}
if (sum === 0) {
    return true;
} else {
    return false;
}
}

function groupCheck1(group) {
if (group.name === 'group1') {
    sum = customers[0] + customers[1] + customers[2] + customers[3];

} else if (group.name === 'group2') {
    sum = customers[4] + customers[5] + customers[6] + customers[7];

} else {
    sum = customers[11] + customers[10] + customers[9] + customers[8];

}
return sum;
}

function groupCheck(group) {
if (group.name === 'group1') {
    sum = customers[0] + customers[1] + customers[2] + customers[3];
    if (sum === 0) {
        return true;
    }
} else if (group.name === 'group2') {
    sum = customers[4] + customers[5] + customers[6] + customers[7];
    if (sum === 0) {
        return true;
    }
} else {
    sum = customers[11] + customers[10] + customers[9] + customers[8];
    if (sum === 0) {
        return true;
    }
}
return false;
}


function findClosestPoint(currentLocation) {

if (customers[currentLocation] !== 0) {
    return currentLocation;
} else if (currentLocation <= 6) {
    for (i = 0; i <= 6; i++) {
        if (customers[i] !== 0) {
            return currentLocation = i;
        }
    }
} else if (currentLocation > 6) {
    for (i = 11; 6 < i; i--) {
        if (customers[i] !== 0) {
            return currentLocation = i;
        }
    }
}

}

function findCurrentLocation(groupName) {

if (groupName === 'group1') {
    if (customers[0] !== 0) {
        currentLocation = 0;
    } else if (customers[1] !== 0) {
        currentLocation = 1;
    } else if (customers[2] !== 0) {
        currentLocation = 2;
    } else if (customers[3] !== 0) {
        currentLocation = 3;
    }
}
if (groupName === 'group3') {
    if (customers[11] !== 0) {
        currentLocation = 11;
    } else if (customers[10] !== 0) {
        currentLocation = 10;
    } else if (customers[9] !== 0) {
        currentLocation = 9;
    } else if (customers[8] !== 0) {
        currentLocation = 8;
    }
}
if (groupName === 'group2') {
    if (customers[7] !== 0) {
        currentLocation = 7;
    } else if (customers[6] !== 0) {
        currentLocation = 6;
    } else if (customers[5] !== 0) {
        currentLocation = 5;
    } else if (customers[4] !== 0) {
        currentLocation = 4;
    }
}
return currentLocation;

}

function firstCar(group) {

if (group.name === 'group1') {
    currentLocation = findCurrentLocation(group.name)
    if (cars[0].carCapacity >= customers[currentLocation] && customers[currentLocation] !== 0) {
        cars[0].carCapacity = cars[0].carCapacity - customers[currentLocation];
        customers[currentLocation] = 0;
    } else {
        customers[currentLocation] = customers[currentLocation] - cars[0].carCapacity;
        cars[0].carCapacity = 0;

    }
    console.log(cars[0].carCapacity + " car capacity " + currentLocation + " " + cars[0].name)
} else if (group.name === 'group3') {
    currentLocation = findCurrentLocation(group.name)
    if (cars[0].carCapacity >= customers[currentLocation]) {
        cars[0].carCapacity = cars[0].carCapacity - customers[currentLocation];
        customers[currentLocation] = 0;
    } else {
        customers[currentLocation] = customers[currentLocation] - cars[0].carCapacity;
        cars[0].carCapacity = 0;
    }
    console.log(cars[0].carCapacity + " car capacity " + currentLocation + " bu arac" + " " + cars[0].name)
} else if (group.name === 'group2') {
    currentLocation = findCurrentLocation(group.name);
    if (cars[0].carCapacity >= customers[currentLocation]) {
        cars[0].carCapacity = cars[0].carCapacity - customers[currentLocation];
        customers[currentLocation] = 0;
    } else {
        customers[currentLocation] = customers[currentLocation] - cars[0].carCapacity;
        cars[0].carCapacity = 0;
    }
}
if (currentLocation <= 7) {
    car1Visited.push(currentLocation);
} else if (currentLocation > 7) {
    car1Visited.push(currentLocation + 1);
}

}

function secondCar(group) {
if (group.name === 'group1') {
    currentLocation = findCurrentLocation(group.name)
    if (cars[1].carCapacity >= customers[currentLocation]) {
        cars[1].carCapacity = cars[1].carCapacity - customers[currentLocation];
        customers[currentLocation] = 0;
    } else {
        customers[currentLocation] = customers[currentLocation] - cars[1].carCapacity;
        cars[1].carCapacity = 0;
    }
    console.log(cars[1].carCapacity + " car capacity " + currentLocation + " current " + " " + cars[1].name)
} else if (group.name === 'group3') {
    currentLocation = findCurrentLocation(group.name)
    if (cars[1].carCapacity >= customers[currentLocation]) {
        cars[1].carCapacity = cars[1].carCapacity - customers[currentLocation];
        customers[currentLocation] = 0;
    } else {
        customers[currentLocation] = customers[currentLocation] - cars[1].carCapacity;
        cars[1].carCapacity = 0;
    }

    console.log(cars[1].carCapacity + " car capacity " + currentLocation + " current" + " " + cars[1].name)
} else if (group.name === 'group2') {
    currentLocation = findCurrentLocation(group.name);
    if (cars[1].carCapacity >= customers[currentLocation]) {
        cars[1].carCapacity = cars[1].carCapacity - customers[currentLocation];
        customers[currentLocation] = 0;
    } else {
        customers[currentLocation] = customers[currentLocation] - cars[1].carCapacity;
        cars[1].carCapacity = 0;
    }
    console.log(cars[1].carCapacity + " car capacity " + currentLocation + " current" + " " + cars[1].name)
}

if (currentLocation <= 6) {
    car2Visited.push(currentLocation);
} else if (currentLocation > 6) {
    car2Visited.push(currentLocation + 1);
}
}

function thirdCar(group) {
if (group.name === 'group1') {
    currentLocation = findCurrentLocation(group.name);
    if (cars[2].carCapacity >= customers[currentLocation]) {
        cars[2].carCapacity = cars[2].carCapacity - customers[currentLocation];
        customers[currentLocation] = 0;
    } else {
        customers[currentLocation] = customers[currentLocation] - cars[2].carCapacity;
        cars[2].carCapacity = 0;
    }
    console.log(cars[2].carCapacity + " car capacity " + currentLocation + " current " + " " + cars[2].name)
} else if (group.name === 'group3') {
    currentLocation = findCurrentLocation(group.name);
    if (cars[2].carCapacity >= customers[currentLocation]) {
        cars[2].carCapacity = cars[2].carCapacity - customers[currentLocation];
        customers[currentLocation] = 0;
    } else {
        customers[currentLocation] = customers[currentLocation] - cars[2].carCapacity;
        cars[2].carCapacity = 0;
    }
    console.log(cars[2].carCapacity + " car capacity " + currentLocation + " current " + " " + cars[2].name)
} else if (group.name === 'group2') {
    currentLocation = findCurrentLocation(group.name);
    if (cars[2].carCapacity >= customers[currentLocation]) {
        cars[2].carCapacity = cars[2].carCapacity - customers[currentLocation];
        customers[currentLocation] = 0;
    } else {
        customers[currentLocation] = customers[currentLocation] - cars[2].carCapacity;
        cars[2].carCapacity = 0;
    }
    console.log(cars[2].carCapacity + " car capacity " + currentLocation + " current " + " " + cars[2].name)
}
if (currentLocation <= 6) {
    car3Visited.push(currentLocation);
} else if (currentLocation > 6) {
    car3Visited.push(currentLocation + 1);
}
}

function getCustomer(currentLocation, car) {
console.log(car.name + " gelen araba bu mu ? ");
if (car.carCapacity >= customers[currentLocation]) {
    car.carCapacity = car.carCapacity - customers[currentLocation];
    customers[currentLocation] = 0;
} else if (car.carCapacity < customers[currentLocation]) {
    customers[currentLocation] = customers[currentLocation] - car.carCapacity;
    car.carCapacity = 0;
}
if (car.name === 'car40') {
    if (currentLocation <= 6) {
        car1Visited.push(currentLocation);
    } else if (currentLocation > 6) {
        car1Visited.push(currentLocation + 1);
    }
} else if (car.name === 'car30') {
    if (currentLocation <= 6) {
        car2Visited.push(currentLocation);
    } else if (currentLocation > 6) {
        car2Visited.push(currentLocation + 1);
    }
} else if (car.name === 'car25') {
    if (currentLocation <= 6) {
        car3Visited.push(currentLocation);
    } else if (currentLocation > 6) {
        car3Visited.push(currentLocation + 1);
    }
}
}

function sendACar(customers) {
var sum = 0;
for (i = 0; i < 12; i++) {
    sum = sum + customers[i];
}
if (sum <= 25) {
    console.log("bir tane araç kiralama yeterli olucak....");
    numberOfRentCar++;
} else if (sum > 25) {
    while (sum > 25) {
        sum = sum - 25;
        numberOfRentCar++;
    }
    numberOfRentCar++;
    console.log("su kadar arac lazim .... " + numberOfRentCar);
}
rentCarVisits(numberOfRentCar);
}

function rentCarVisits(numberOfRentCar) {
while (numberOfRentCar !== 0) {
    if (numberOfRentCar > 1) {
        while (rentCar.carCapacity !== 0) {
            for (i = 0; i < 12; i++) {
                if (i <= 6 && customers[i] !== 0 && rentCar.carCapacity !== 0) {
                    rentCarVisited.push(i);
                    if (rentCar.carCapacity >= customers[i]) {
                        rentCar.carCapacity = rentCar.carCapacity - customers[i];
                        customers[i] = 0;
                    } else if (rentCar.carCapacity < customers[i]) {
                        customers[i] = customers[i] - rentCar.carCapacity;
                        rentCar.carCapacity = 0;
                    }
                } else if (i > 6 && customers[i] !== 0 && rentCar.carCapacity !== 0) {
                    rentCarVisited.push(i);
                    if (rentCar.carCapacity >= customers[i]) {
                        rentCar.carCapacity = rentCar.carCapacity - customers[i];
                        customers[i] = 0;
                    } else if (rentCar.carCapacity < customers[i]) {
                        customers[i] = customers[i] - rentCar.carCapacity;
                        rentCar.carCapacity = 0;
                    }

                }
            }
        }
    } else if (numberOfRentCar === 1) {
        for (i = 0; i < 12; i++) {
            if (i <= 6 && customers[i] !== 0 && rentCar.carCapacity !== 0) {
                rentCarVisited.push(i);
                if (rentCar.carCapacity >= customers[i]) {
                    rentCar.carCapacity = rentCar.carCapacity - customers[i];
                    customers[i] = 0;
                } else if (rentCar.carCapacity < customers[i]) {
                    customers[i] = customers[i] - rentCar.carCapacity;
                    rentCar.carCapacity = 0;
                }
            } else if (i > 6 && customers[i] !== 0 && rentCar.carCapacity !== 0) {
                rentCarVisited.push(i);
                if (rentCar.carCapacity >= customers[i]) {
                    rentCar.carCapacity = rentCar.carCapacity - customers[i];
                    customers[i] = 0;
                } else if (rentCar.carCapacity < customers[i]) {
                    customers[i] = customers[i] - rentCar.carCapacity;
                    rentCar.carCapacity = 0;
                }

            }
        }
    }

    calculateCost(rentCarVisited);
    numberOfRentCar--;
    rentCarVisited.push(7);
    console.log(" bunlar rentCar lar nerelerden gecti? :  " + rentCarVisited);
    for (i = 0; i < rentCarVisited.length; i++) {
        rentCarVisited.pop();
    }
    rentCar.carCapacity = 25;

}
}

function calculateCost(rentCarVisited) {
// kiralanan aracın geçtiği noktaların okula en uzak olandan en yakın olana doğru servis aracını başlatmak için
// distancelarını bir array de tutuyoruz....
var costArray = [];
for (i = 0; i < rentCarVisited.length; i++) {
    var costItem = { point: rentCarVisited[i], costDistance: distance[rentCarVisited[i]][7] };
    costArray.push(costItem);
    totalRentCost = totalRentCost + distance[rentCarVisited[i]][7]
}
for (i = 0; i < costArray.length - 1; i++) {
    if (costArray[i].costDistance < costArray[i].costDistance) {
        let temp = costArray[i];
        costArray[i] = costArray[i + 1];
        costArray[i + 1] = temp;
    }
}
sendRentCarToUni(costArray);
}

function sendRentCarToUni(costArray) {
for (i = 0; i < costArray.length; i++) {
    console.log("kiralanan arac  " + costArray[i].point + " noktasindan geçti ve okula dogru gidiyor")
}
totalRentCost = totalRentCost + 50;
console.log("Toplamda kiralanan araç ve yol maliyeti :  " + totalRentCost + "  ve kiralik arac okulda...");
}

function carCapacitySum() {
var sum = 0;
sum = car1.carCapacity + car2.carCapacity + car3.carCapacity;
return sum;
}


function limitedNumberOfService() {
while (allCustomersTaken(customers) === false) {
    if (cars[0].carCapacity !== 0) {
        if (!groupCheck(groupList[0])) {
            firstCar(groupList[0]);
        }
        if (groupCheck(groupList[0])) {
            currentLocation = findClosestPoint(currentLocation);
            getCustomer(currentLocation, cars[0]);
        }

    }
    if (cars[1].carCapacity !== 0) {
        if (!groupCheck(groupList[1])) {
            secondCar(groupList[1]);
        }
        if (groupCheck(groupList[1])) {
            currentLocation = findClosestPoint(currentLocation);
            getCustomer(currentLocation, cars[1]);
        }

    } else if (cars[2].carCapacity !== 0) {
        if (!groupCheck(groupList[2])) {
            thirdCar(groupList[2]);
        }
        if (groupCheck(groupList[2])) {
            currentLocation = findClosestPoint(currentLocation);
            getCustomer(currentLocation, cars[2]);
        }

    } else {
        console.log("araç kapasiteleri yetmedi ve geride yolcu kaldi .....")
        for (i = 0; i < 12; i++) {
            if (customers[i] !== 0) {
                console.log(i + " bu noktada  " + customers[i] + " kadar yolcu kaldi");
            }
        }
        break;
    }

}
}

limitedNumberOfService();



while (!allCustomersTaken(customers)) {
sendACar(customers);
}

if (allCustomersTaken(customers)) {
car1Visited.push(7);
car2Visited.push(7);
car3Visited.push(7);
}

car1Visited.map((item) => {
firstCarData.push(testCar[item])
})
car2Visited.map((item) => {
secondCarData.push(testCar[item])
})
car3Visited.map((item) => {
    thirdCarData.push(testCar[item])
})
//console.log(firstCarData)
//console.log(secondCarData)
//console.log(thirdCarData)

let data = []
data.push(firstCarData)
data.push(secondCarData)
data.push(thirdCarData)
console.log(data)


var car1Cost = 0,
car2Cost = 0,
car3Cost = 0;

if (car1Visited.length >= 2) {
console.log(car1Visited + " bu car1 visited lar");
for (i = 0; i < car1Visited.length - 1; i++) {
    a = car1Visited[i];
    b = car1Visited[i + 1];
    if (a === 12) {
        a = a - 1
    }
    if (b === 12) {
        b = b - 1
    }
    car1Cost = car1Cost + distance[a][b];
    console.log(distance[a][b]);
}
car1Cost = car1Cost + distance[car1Visited.length - 1][7];
}


if (car2Visited.length >= 2) {
console.log(car1Visited + " bu car2 visited lar");
for (i = 0; i < car2Visited.length - 1; i++) {
    a = car2Visited[i];
    b = car2Visited[i + 1];
    if (a === 12) {
        a = a - 1
    }
    if (b === 12) {
        b = b - 1
    }

    car2Cost = car2Cost + distance[a][b];
    console.log(distance[a][b]);
}
car2Cost = car2Cost + distance[car2Visited.length - 1][7];
}


if (car3Visited.length >= 2) {
console.log(car3Visited + " bu car3 visited lar");
for (i = 0; i < car3Visited.length - 1; i++) {
    a = car3Visited[i];
    b = car3Visited[i + 1];
    if (a === 12) {
        a = a - 1
    }
    if (b === 12) {
        b = b - 1
    }
    car3Cost = car3Cost + distance[a][b];
    console.log(distance[a][b]);
}
car3Cost = car3Cost + distance[car3Visited.length - 1][7];

}
/*
console.log(groupList);
console.log(cars)
*/
var allDistanceCar=[]
allDistanceCar.push(car1Cost)
allDistanceCar.push(car2Cost)
allDistanceCar.push(car3Cost)
console.log("distance")
console.log(allDistanceCar)
res.send(allDistanceCar);
}
module.exports.sendCityData=function(req,res){
    res.send(cityData)

}
module.exports.addRoute=function(req,res){
    const test=[1,2,3]
    test.map((item)=>{
        if(item===1){
            User.addAllRoutes(req.body.firstCar).then((result)=>{
                  console.log(result)
            })
        }else if(item==2){
            User.addAllRoutes(req.body.secondCar).then((result)=>{
                console.log(result)
          })
        }
        else{
            User.addAllRoutes(req.body.thirdCar).then((result)=>{
                console.log(result)
          })
        }
    })
    res.send(req.body.data)
}
module.exports.deneme=function(req,res){
  res.send(req.body.data)

}
module.exports.getRoutes=function(req,res){
  var customers=[]
  req.body.data.map((item)=>{
    console.log(item)
    customers.push(item)
  })
  
  let testCar = [{
    //name: "darıca",
    latitude: 40.7739,
    longitude: 29.4003
},
{
    //name: "çayırova",
    latitude: 40.8242,
    longitude: 29.3722
},
{
    //name: "gebze",
    latitude: 40.8025,
    longitude: 29.4398
},
{
    //name: "dilovası",
    latitude: 40.7876,
    longitude: 29.5442
},
{
    //name: "körfez",
    latitude: 40.7764,
    longitude: 29.7377
},
{
    //name: "derince",
    latitude: 40.7562,
    longitude: 29.8309
},
{
    //name: "izmit",
    latitude: 40.7654,
    longitude: 29.9408
},
{
    //name: "kou",
    latitude: 40.8222,
    longitude: 29.9217
},
{
    //name: "kandıra",
    latitude: 41.0704,
    longitude: 30.1524
},
{
    //name: "kartepe",
    latitude: 40.7534,
    longitude: 30.0232
},
{
    //name: "başiskele",
    latitude: 40.6298,
    longitude: 29.9509
},
{
    //name: "gölcük",
    latitude: 40.7168,
    longitude: 29.8195
},
{
    //name: "karamürsel",
    latitude: 40.6913,
    longitude: 29.6164
}
]
let firstCarData = []
let secondCarData = []
let thirdCarData = []

currentLocation = 0;
var distance = [12][13];
distance = [
[0, 6.86, 7.4, 18.9, 35.7, 44.6, 54.6, 59.9, 99.4, 66.8, 81.4, 80, 40.1],
[6.86, 0, 7.7, 21.2, 38.1, 47.0, 57, 62.6, 102, 69.2, 83.7, 68.8, 42.4],
[7.4, 7.7, 0, 12.4, 29.2, 38.2, 48.2, 53.7, 92.9, 60.4, 74.9, 60, 33.6],
[18.9, 21.2, 12.4, 0, 19.4, 27.6, 39.3, 44.1, 84.1, 51.5, 66.1, 60.3, 33.9],
[35.7, 38.1, 29.2, 19.4, 0, 9.6, 20, 25.3, 64.1, 32.2, 43.4, 41.9, 54.4],
[44.6, 47, 38.2, 27.6, 9.6, 0, 11, 16.2, 54.5, 23.2, 33.8, 32.3, 47],
[54.6, 57, 48.2, 39.3, 20, 11, 0, 9.1, 45.1, 13.8, 22.7, 20.1, 34.8],
[99.4, 102, 92.9, 84.1, 64.1, 54.5, 45.1, 46.9, 0, 52, 64.3, 62.8, 77.5],
[66.8, 69.2, 60.4, 51.5, 32.2, 23.2, 13.8, 22.1, 52, 0, 24.7, 24.8, 39.5],
[81.4, 83.7, 74.9, 66.1, 43.4, 33.8, 22.7, 34.5, 64.3, 24.7, 0, 30.6, 45.3],
[80, 68.8, 60, 60.3, 41.9, 32.3, 20.1, 33, 62.8, 24.8, 30.6, 0, 25.9],
[40.1, 42.4, 33.6, 33.9, 54.4, 47, 34.8, 47.6, 77.5, 39.5, 45.3, 25.9, 0]
];
//var customers = [0, 10, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0]
//var customers = [20, 5, 0, 10, 5, 0, 15, 5, 10, 15, 0, 5];
//var customers = [20, 5, 5, 10, 5, 5, 15, 5, 10, 10, 5, 5];
//var customers = [0, 0, 40, 0, 0, 0, 0, 0, 10, 0, 0, 50];

var car1 = { name: "car25", carCapacity: 25 },
car2 = { name: "car30", carCapacity: 30 },
car3 = { name: "car40", carCapacity: 40 },
rentCar = { name: "rentCar", carCapacity: 25 };

var cars = [car3, car2, car1];

var car1Visited = [],
car2Visited = [],
car3Visited = [],
rentCarVisited = [];

var group1 = { name: "group1", capacity: customers[0] + customers[1] + customers[2] + customers[3] },
group2 = { name: "group2", capacity: customers[4] + customers[5] + customers[6] + customers[7] },
group3 = { name: "group3", capacity: customers[8] + customers[9] + customers[10] + customers[11] };



var groupList = [group1, group2, group3];

var numberOfRentCar = 0;

var totalRentCost = 0;

for (let j = 0; j < groupList.length - 1; j++) {
if (groupList[j].capacity < groupList[j + 1].capacity) {
    let temp = groupList[j];
    groupList[j] = groupList[j + 1];
    groupList[j + 1] = temp;
}
}
/*

for (let i = 0; i < groupList.length - 1; i++) {
if (groupList[i].capacity > groupList[i + 1].capacity) {
    let temp = groupList[i];
    groupList[i] = groupList[i + 1];
    groupList[i + 1] = temp;
}
}
groupList.reverse();
*/
function allCustomersTaken(customers) {
var sum = 0;
for (i = 0; i < 12; i++) {
    sum = sum + customers[i];
}
if (sum === 0) {
    return true;
} else {
    return false;
}
}

function groupCheck1(group) {
if (group.name === 'group1') {
    sum = customers[0] + customers[1] + customers[2] + customers[3];

} else if (group.name === 'group2') {
    sum = customers[4] + customers[5] + customers[6] + customers[7];

} else {
    sum = customers[11] + customers[10] + customers[9] + customers[8];

}
return sum;
}

function groupCheck(group) {
if (group.name === 'group1') {
    sum = customers[0] + customers[1] + customers[2] + customers[3];
    if (sum === 0) {
        return true;
    }
} else if (group.name === 'group2') {
    sum = customers[4] + customers[5] + customers[6] + customers[7];
    if (sum === 0) {
        return true;
    }
} else {
    sum = customers[11] + customers[10] + customers[9] + customers[8];
    if (sum === 0) {
        return true;
    }
}
return false;
}


function findClosestPoint(currentLocation) {

if (customers[currentLocation] !== 0) {
    return currentLocation;
} else if (currentLocation <= 6) {
    for (i = 0; i <= 6; i++) {
        if (customers[i] !== 0) {
            return currentLocation = i;
        }
    }
} else if (currentLocation > 6) {
    for (i = 11; 6 < i; i--) {
        if (customers[i] !== 0) {
            return currentLocation = i;
        }
    }
}

}

function findCurrentLocation(groupName) {

if (groupName === 'group1') {
    if (customers[0] !== 0) {
        currentLocation = 0;
    } else if (customers[1] !== 0) {
        currentLocation = 1;
    } else if (customers[2] !== 0) {
        currentLocation = 2;
    } else if (customers[3] !== 0) {
        currentLocation = 3;
    }
}
if (groupName === 'group3') {
    if (customers[11] !== 0) {
        currentLocation = 11;
    } else if (customers[10] !== 0) {
        currentLocation = 10;
    } else if (customers[9] !== 0) {
        currentLocation = 9;
    } else if (customers[8] !== 0) {
        currentLocation = 8;
    }
}
if (groupName === 'group2') {
    if (customers[7] !== 0) {
        currentLocation = 7;
    } else if (customers[6] !== 0) {
        currentLocation = 6;
    } else if (customers[5] !== 0) {
        currentLocation = 5;
    } else if (customers[4] !== 0) {
        currentLocation = 4;
    }
}
return currentLocation;

}

function firstCar(group) {

if (group.name === 'group1') {
    currentLocation = findCurrentLocation(group.name)
    if (cars[0].carCapacity >= customers[currentLocation] && customers[currentLocation] !== 0) {
        cars[0].carCapacity = cars[0].carCapacity - customers[currentLocation];
        customers[currentLocation] = 0;
    } else {
        customers[currentLocation] = customers[currentLocation] - cars[0].carCapacity;
        cars[0].carCapacity = 0;

    }
    console.log(cars[0].carCapacity + " car capacity " + currentLocation + " " + cars[0].name)
} else if (group.name === 'group3') {
    currentLocation = findCurrentLocation(group.name)
    if (cars[0].carCapacity >= customers[currentLocation]) {
        cars[0].carCapacity = cars[0].carCapacity - customers[currentLocation];
        customers[currentLocation] = 0;
    } else {
        customers[currentLocation] = customers[currentLocation] - cars[0].carCapacity;
        cars[0].carCapacity = 0;
    }
    console.log(cars[0].carCapacity + " car capacity " + currentLocation + " bu arac" + " " + cars[0].name)
} else if (group.name === 'group2') {
    currentLocation = findCurrentLocation(group.name);
    if (cars[0].carCapacity >= customers[currentLocation]) {
        cars[0].carCapacity = cars[0].carCapacity - customers[currentLocation];
        customers[currentLocation] = 0;
    } else {
        customers[currentLocation] = customers[currentLocation] - cars[0].carCapacity;
        cars[0].carCapacity = 0;
    }
}
if (currentLocation <= 7) {
    car1Visited.push(currentLocation);
} else if (currentLocation > 7) {
    car1Visited.push(currentLocation + 1);
}

}

function secondCar(group) {
if (group.name === 'group1') {
    currentLocation = findCurrentLocation(group.name)
    if (cars[1].carCapacity >= customers[currentLocation]) {
        cars[1].carCapacity = cars[1].carCapacity - customers[currentLocation];
        customers[currentLocation] = 0;
    } else {
        customers[currentLocation] = customers[currentLocation] - cars[1].carCapacity;
        cars[1].carCapacity = 0;
    }
    console.log(cars[1].carCapacity + " car capacity " + currentLocation + " current " + " " + cars[1].name)
} else if (group.name === 'group3') {
    currentLocation = findCurrentLocation(group.name)
    if (cars[1].carCapacity >= customers[currentLocation]) {
        cars[1].carCapacity = cars[1].carCapacity - customers[currentLocation];
        customers[currentLocation] = 0;
    } else {
        customers[currentLocation] = customers[currentLocation] - cars[1].carCapacity;
        cars[1].carCapacity = 0;
    }

    console.log(cars[1].carCapacity + " car capacity " + currentLocation + " current" + " " + cars[1].name)
} else if (group.name === 'group2') {
    currentLocation = findCurrentLocation(group.name);
    if (cars[1].carCapacity >= customers[currentLocation]) {
        cars[1].carCapacity = cars[1].carCapacity - customers[currentLocation];
        customers[currentLocation] = 0;
    } else {
        customers[currentLocation] = customers[currentLocation] - cars[1].carCapacity;
        cars[1].carCapacity = 0;
    }
    console.log(cars[1].carCapacity + " car capacity " + currentLocation + " current" + " " + cars[1].name)
}

if (currentLocation <= 6) {
    car2Visited.push(currentLocation);
} else if (currentLocation > 6) {
    car2Visited.push(currentLocation + 1);
}
}

function thirdCar(group) {
if (group.name === 'group1') {
    currentLocation = findCurrentLocation(group.name);
    if (cars[2].carCapacity >= customers[currentLocation]) {
        cars[2].carCapacity = cars[2].carCapacity - customers[currentLocation];
        customers[currentLocation] = 0;
    } else {
        customers[currentLocation] = customers[currentLocation] - cars[2].carCapacity;
        cars[2].carCapacity = 0;
    }
    console.log(cars[2].carCapacity + " car capacity " + currentLocation + " current " + " " + cars[2].name)
} else if (group.name === 'group3') {
    currentLocation = findCurrentLocation(group.name);
    if (cars[2].carCapacity >= customers[currentLocation]) {
        cars[2].carCapacity = cars[2].carCapacity - customers[currentLocation];
        customers[currentLocation] = 0;
    } else {
        customers[currentLocation] = customers[currentLocation] - cars[2].carCapacity;
        cars[2].carCapacity = 0;
    }
    console.log(cars[2].carCapacity + " car capacity " + currentLocation + " current " + " " + cars[2].name)
} else if (group.name === 'group2') {
    currentLocation = findCurrentLocation(group.name);
    if (cars[2].carCapacity >= customers[currentLocation]) {
        cars[2].carCapacity = cars[2].carCapacity - customers[currentLocation];
        customers[currentLocation] = 0;
    } else {
        customers[currentLocation] = customers[currentLocation] - cars[2].carCapacity;
        cars[2].carCapacity = 0;
    }
    console.log(cars[2].carCapacity + " car capacity " + currentLocation + " current " + " " + cars[2].name)
}
if (currentLocation <= 6) {
    car3Visited.push(currentLocation);
} else if (currentLocation > 6) {
    car3Visited.push(currentLocation + 1);
}
}

function getCustomer(currentLocation, car) {
console.log(car.name + " gelen araba bu mu ? ");
if (car.carCapacity >= customers[currentLocation]) {
    car.carCapacity = car.carCapacity - customers[currentLocation];
    customers[currentLocation] = 0;
} else if (car.carCapacity < customers[currentLocation]) {
    customers[currentLocation] = customers[currentLocation] - car.carCapacity;
    car.carCapacity = 0;
}
if (car.name === 'car40') {
    if (currentLocation <= 6) {
        car1Visited.push(currentLocation);
    } else if (currentLocation > 6) {
        car1Visited.push(currentLocation + 1);
    }
} else if (car.name === 'car30') {
    if (currentLocation <= 6) {
        car2Visited.push(currentLocation);
    } else if (currentLocation > 6) {
        car2Visited.push(currentLocation + 1);
    }
} else if (car.name === 'car25') {
    if (currentLocation <= 6) {
        car3Visited.push(currentLocation);
    } else if (currentLocation > 6) {
        car3Visited.push(currentLocation + 1);
    }
}
}

function sendACar(customers) {
var sum = 0;
for (i = 0; i < 12; i++) {
    sum = sum + customers[i];
}
if (sum <= 25) {
    console.log("bir tane araç kiralama yeterli olucak....");
    numberOfRentCar++;
} else if (sum > 25) {
    while (sum > 25) {
        sum = sum - 25;
        numberOfRentCar++;
    }
    numberOfRentCar++;
    console.log("su kadar arac lazim .... " + numberOfRentCar);
}
rentCarVisits(numberOfRentCar);
}

function rentCarVisits(numberOfRentCar) {
while (numberOfRentCar !== 0) {
    if (numberOfRentCar > 1) {
        while (rentCar.carCapacity !== 0) {
            for (i = 0; i < 12; i++) {
                if (i <= 6 && customers[i] !== 0 && rentCar.carCapacity !== 0) {
                    rentCarVisited.push(i);
                    if (rentCar.carCapacity >= customers[i]) {
                        rentCar.carCapacity = rentCar.carCapacity - customers[i];
                        customers[i] = 0;
                    } else if (rentCar.carCapacity < customers[i]) {
                        customers[i] = customers[i] - rentCar.carCapacity;
                        rentCar.carCapacity = 0;
                    }
                } else if (i > 6 && customers[i] !== 0 && rentCar.carCapacity !== 0) {
                    rentCarVisited.push(i);
                    if (rentCar.carCapacity >= customers[i]) {
                        rentCar.carCapacity = rentCar.carCapacity - customers[i];
                        customers[i] = 0;
                    } else if (rentCar.carCapacity < customers[i]) {
                        customers[i] = customers[i] - rentCar.carCapacity;
                        rentCar.carCapacity = 0;
                    }

                }
            }
        }
    } else if (numberOfRentCar === 1) {
        for (i = 0; i < 12; i++) {
            if (i <= 6 && customers[i] !== 0 && rentCar.carCapacity !== 0) {
                rentCarVisited.push(i);
                if (rentCar.carCapacity >= customers[i]) {
                    rentCar.carCapacity = rentCar.carCapacity - customers[i];
                    customers[i] = 0;
                } else if (rentCar.carCapacity < customers[i]) {
                    customers[i] = customers[i] - rentCar.carCapacity;
                    rentCar.carCapacity = 0;
                }
            } else if (i > 6 && customers[i] !== 0 && rentCar.carCapacity !== 0) {
                rentCarVisited.push(i);
                if (rentCar.carCapacity >= customers[i]) {
                    rentCar.carCapacity = rentCar.carCapacity - customers[i];
                    customers[i] = 0;
                } else if (rentCar.carCapacity < customers[i]) {
                    customers[i] = customers[i] - rentCar.carCapacity;
                    rentCar.carCapacity = 0;
                }

            }
        }
    }

    calculateCost(rentCarVisited);
    numberOfRentCar--;
    rentCarVisited.push(7);
    console.log(" bunlar rentCar lar nerelerden gecti? :  " + rentCarVisited);
    for (i = 0; i < rentCarVisited.length; i++) {
        rentCarVisited.pop();
    }
    rentCar.carCapacity = 25;

}
}

function calculateCost(rentCarVisited) {
// kiralanan aracın geçtiği noktaların okula en uzak olandan en yakın olana doğru servis aracını başlatmak için
// distancelarını bir array de tutuyoruz....
var costArray = [];
for (i = 0; i < rentCarVisited.length; i++) {
    var costItem = { point: rentCarVisited[i], costDistance: distance[rentCarVisited[i]][7] };
    costArray.push(costItem);
    totalRentCost = totalRentCost + distance[rentCarVisited[i]][7]
}
for (i = 0; i < costArray.length - 1; i++) {
    if (costArray[i].costDistance < costArray[i].costDistance) {
        let temp = costArray[i];
        costArray[i] = costArray[i + 1];
        costArray[i + 1] = temp;
    }
}
sendRentCarToUni(costArray);
}

function sendRentCarToUni(costArray) {
for (i = 0; i < costArray.length; i++) {
    console.log("kiralanan arac  " + costArray[i].point + " noktasindan geçti ve okula dogru gidiyor")
}
totalRentCost = totalRentCost + 50;
console.log("Toplamda kiralanan araç ve yol maliyeti :  " + totalRentCost + "  ve kiralik arac okulda...");
}

function carCapacitySum() {
var sum = 0;
sum = car1.carCapacity + car2.carCapacity + car3.carCapacity;
return sum;
}


function limitedNumberOfService() {
while (allCustomersTaken(customers) === false) {
    if (cars[0].carCapacity !== 0) {
        if (!groupCheck(groupList[0])) {
            firstCar(groupList[0]);
        }
        if (groupCheck(groupList[0])) {
            currentLocation = findClosestPoint(currentLocation);
            getCustomer(currentLocation, cars[0]);
        }

    }
    if (cars[1].carCapacity !== 0) {
        if (!groupCheck(groupList[1])) {
            secondCar(groupList[1]);
        }
        if (groupCheck(groupList[1])) {
            currentLocation = findClosestPoint(currentLocation);
            getCustomer(currentLocation, cars[1]);
        }

    } else if (cars[2].carCapacity !== 0) {
        if (!groupCheck(groupList[2])) {
            thirdCar(groupList[2]);
        }
        if (groupCheck(groupList[2])) {
            currentLocation = findClosestPoint(currentLocation);
            getCustomer(currentLocation, cars[2]);
        }

    } else {
        console.log("araç kapasiteleri yetmedi ve geride yolcu kaldi .....")
        for (i = 0; i < 12; i++) {
            if (customers[i] !== 0) {
                console.log(i + " bu noktada  " + customers[i] + " kadar yolcu kaldi");
            }
        }
        break;
    }

}
}

limitedNumberOfService();



while (!allCustomersTaken(customers)) {
sendACar(customers);
}

if (allCustomersTaken(customers)) {
car1Visited.push(7);
car2Visited.push(7);
car3Visited.push(7);
}

car1Visited.map((item) => {
firstCarData.push(testCar[item])
})
car2Visited.map((item) => {
secondCarData.push(testCar[item])
})
car3Visited.map((item) => {
thirdCarData.push(testCar[item])
})
//console.log(firstCarData)
//console.log(secondCarData)
//console.log(thirdCarData)

let data=[]
data.push(firstCarData)
data.push(secondCarData)
data.push(thirdCarData)
console.log(data)
res.send(data);
}