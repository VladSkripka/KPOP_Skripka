type worker = {
Name: string,
surname: string,
available: boolean,
salary: number,
Category: Category,
id: number,


}
function getAllworkers():worker[] {
    let workers: worker[] = [
    {Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, Category: Category.Business, id: 1},
    {Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, Category: Category.Designer, id:2},
    {Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, Category: Category.Developer, id:3},
    {Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, Category: Category.Developer, id:4}
    ]
    return workers;
} 
enum Category {Business, Developer, Designer, QA, ScrumMaster}

function logFirstAvailible(workers:worker[] = getAllworkers()):void{
    let numberOfWorkers: number = workers.length;
    console.log(`Count of workers: ${numberOfWorkers}`);
    let allAvailableWorkers;
    
    for (var item of workers) {
        if(item.available == true){
            allAvailableWorkers = item.Name+ " "+ item.surname;
            console.log(allAvailableWorkers);
        }   
    }
}
logFirstAvailible(getAllworkers());

function getWorkersByCategory(Cat: Category = Category.Designer): Array <string> {
 let arr = getAllworkers();
 let i = 0;
 let j = 0;
 let Names: Array<string> = new Array<string>;
 for (i; i < arr.length; i++) {
    if(arr[i].Category == Cat){
        Names[j]  = arr[i].surname;
        j++;
    }
 }
 return Names;  
}
function logWorkersNames(names: string[]): void{
    console.log(`Worker by category: ${names}`);
}
let myNames = getWorkersByCategory(Category.Developer);
logWorkersNames(myNames);

console.log("Developers:");
getAllworkers().forEach(item =>{if(item.Category == Category.Developer){{
    console.log(item.Name+" "+item.surname);}}
});
let ID: number = 2;
function getWorkerByID(workerID:number):string{
    let worker:string = "";
    getAllworkers().find(item => {if(item.id == workerID){worker = item.Name+" "+item.surname+" "+item.salary;}});
    return worker;
}
let MyWorker =  getWorkerByID(ID);
console.log(`${MyWorker} with ID ${ID}`);

function createCustomerID(name: string, ID:number):string{
    let customerID:string = name+ID;
    return customerID;
}
let myID:string = createCustomerID("Ann", 10);
console.log(myID);

let IdGenerator: typeof createCustomerID = function (name: string, ID: number){return name + ID;};
IdGenerator = createCustomerID;
console.log(IdGenerator("Ann", 10));

function createCustomer(name:string, age?:number, city?: string):void{
    if(age && city) console.log(name+" "+age+" "+city);
    else if(age) console.log(name+" "+age);
    else console.log(name);
}
createCustomer("Ann");
createCustomer("Ann", 21);
createCustomer("Ann", 21, "Kyiv");

console.log("Worker with default designer category");
let myNames2 = getWorkersByCategory();
logWorkersNames(myNames2);
console.log("logFirstAvailible with calling a getAllWorkers function as default parametr:");
logFirstAvailible();

function checkoutWorkers(customer: string,...workerIDs:number[]): Array<string>{
    let mas = getAllworkers().filter(x => x.available == true);
    let i: number;
    let j:number = 0;
    let allAvailebleID = new Array<number>;
    let allAvaileble = new Array<string>;
    for(i = 0; i<workerIDs.length; i++){
        if(workerIDs[i]==mas[0].id){allAvailebleID[j] = workerIDs[i]; j++} 
        else if(workerIDs[i]==mas[1].id){allAvailebleID[j] = workerIDs[i]; j++}
        else if(workerIDs[i]==mas[2].id){allAvailebleID[j] = workerIDs[i]; j++}
    }
    j= 0;
    console.log(customer);
    for (const item of allAvailebleID) {
        allAvaileble[j] = getWorkerByID(item);
        j++;
    }
    return allAvaileble;
}
let cOW = checkoutWorkers("Ann",1,2,4);
cOW.forEach(item => console.log(item));