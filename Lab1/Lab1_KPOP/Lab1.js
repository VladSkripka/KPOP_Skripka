"use strict";
function getAllworkers() {
    let workers = [
        { Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, Category: Category.Business, id: 1 },
        { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, Category: Category.Designer, id: 2 },
        { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, Category: Category.Developer, id: 3 },
        { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, Category: Category.Developer, id: 4 }
    ];
    return workers;
}
var Category;
(function (Category) {
    Category[Category["Business"] = 0] = "Business";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["ScrumMaster"] = 4] = "ScrumMaster";
})(Category || (Category = {}));
function logFirstAvailible(workers = getAllworkers()) {
    let numberOfWorkers = workers.length;
    console.log(`Count of workers: ${numberOfWorkers}`);
    let allAvailableWorkers;
    for (var item of workers) {
        if (item.available == true) {
            allAvailableWorkers = item.Name + " " + item.surname;
            console.log(allAvailableWorkers);
        }
    }
}
logFirstAvailible(getAllworkers());
function getWorkersByCategory(Cat = Category.Designer) {
    let arr = getAllworkers();
    let i = 0;
    let j = 0;
    let Names = new Array;
    for (i; i < arr.length; i++) {
        if (arr[i].Category == Cat) {
            Names[j] = arr[i].surname;
            j++;
        }
    }
    return Names;
}
function logWorkersNames(names) {
    console.log(`Worker by category: ${names}`);
}
let myNames = getWorkersByCategory(Category.Developer);
logWorkersNames(myNames);
console.log("Developers:");
getAllworkers().forEach(item => {
    if (item.Category == Category.Developer) {
        {
            console.log(item.Name + " " + item.surname);
        }
    }
});
let ID = 2;
function getWorkerByID(workerID) {
    let worker = "";
    getAllworkers().find(item => { if (item.id == workerID) {
        worker = item.Name + " " + item.surname + " " + item.salary;
    } });
    return worker;
}
let MyWorker = getWorkerByID(ID);
console.log(`${MyWorker} with ID ${ID}`);
function createCustomerID(name, ID) {
    let customerID = name + ID;
    return customerID;
}
let myID = createCustomerID("Ann", 10);
console.log(myID);
let IdGenerator = function (name, ID) { return name + ID; };
IdGenerator = createCustomerID;
console.log(IdGenerator("Ann", 10));
function createCustomer(name, age, city) {
    if (age && city)
        console.log(name + " " + age + " " + city);
    else if (age)
        console.log(name + " " + age);
    else
        console.log(name);
}
createCustomer("Ann");
createCustomer("Ann", 21);
createCustomer("Ann", 21, "Kyiv");
console.log("Worker with default designer category");
let myNames2 = getWorkersByCategory();
logWorkersNames(myNames2);
console.log("logFirstAvailible with calling a getAllWorkers function as default parametr:");
logFirstAvailible();
function checkoutWorkers(customer, ...workerIDs) {
    let mas = getAllworkers().filter(x => x.available == true);
    let i;
    let j = 0;
    let allAvailebleID = new Array;
    let allAvaileble = new Array;
    for (i = 0; i < workerIDs.length; i++) {
        if (workerIDs[i] == mas[0].id) {
            allAvailebleID[j] = workerIDs[i];
            j++;
        }
        else if (workerIDs[i] == mas[1].id) {
            allAvailebleID[j] = workerIDs[i];
            j++;
        }
        else if (workerIDs[i] == mas[2].id) {
            allAvailebleID[j] = workerIDs[i];
            j++;
        }
    }
    j = 0;
    console.log(customer);
    for (const item of allAvailebleID) {
        allAvaileble[j] = getWorkerByID(item);
        j++;
    }
    return allAvaileble;
}
let cOW = checkoutWorkers("Ann", 1, 2, 4);
cOW.forEach(item => console.log(item));
