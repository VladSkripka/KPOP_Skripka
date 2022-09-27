
interface WorkerINT {
    Name:string;
    surname:string;
    available: boolean;
    salary:number;
    id:number;
};

function getAllworkers(): Array<WorkerINT> {
    let workers = new Array<WorkerINT>;
    workers =
    [
    {Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, id: 1},
    {Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, id:2},
    {Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, id:3},
    {Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, id:4}
    ]
    return workers;
} 

 function getWorkerByID(id: WorkerINT["id"]): WorkerINT {
    let myWorker :WorkerINT = {Name:" ", surname:" ", available: true, salary: 0,id: 0};
    getAllworkers().forEach(item =>{if(item.id == id){myWorker = item}} )
    return myWorker;
}
function PrintWorker(curWorker:WorkerINT){
    console.log(`${curWorker.Name } ${curWorker.surname} got salary ${curWorker.salary}`)
}

PrintWorker(getWorkerByID(2));


interface PrizeLogger{
     PrizeFunction:(item:string) => void;
}
let logPrize: PrizeLogger = {
    PrizeFunction(item:string){
        console.log(item);
    }
}
logPrize.PrizeFunction("Sus");


interface Person{
    name:string;
    email:string;
}
interface Author extends Person{
    numBooksPublished:number;
}
interface Librarian extends Person{
    department:string;
    assistCustomer:(custName:string)=>void;
}
let favoriteAuthor:Author = {
    name: "Dan",
    email: "dan1234@u.net",
    numBooksPublished: 5
};
/*let favoritelibririan:Librarian = {
    name: "Ben",
    email:"ben234@u.net",
    department: "PML",
    assistCustomer(custName:string){ console.log(custName)}
}*/

class UniversityLabririan implements Librarian{
     
    name = " ";
    email = this.name + "@u.net";
    department = "ITF";

    assistCustomer(custName: string):void{
        console.log(`${this.name} is assisting ${custName}`)
    };
}

let favoritelibririan:Librarian = new UniversityLabririan;
favoritelibririan.name = "John";
favoritelibririan.assistCustomer("Vlad");

abstract class ReferenceItem {
    /*title:string = " ";
    year:number = 0;
    constructor(newTitle: string, newYear:number){
        this.year = newYear;
        this.title = newTitle;
        console.log("Creating a new ReferenceItem ...");
    }*/
    constructor(public title:string, protected year:number){
        this.year = year;
        this.title = title;
     }
    private _publisher:string = "";
    static department: string = "ITF";
    public set publisher(newPublisher:string){
        this._publisher = newPublisher;
    }
    public get publisher(){
        return this._publisher;
    }
    printItem():void{
        console.log(`${this.title} title was published in year ${this.year}, depart. ${ReferenceItem.department}`);
    }
    abstract printCitation():void;
}

//let ref = new ReferenceItem("WP", 2022);
//ref.publisher = "Another SUS"
//console.log(ref.publisher);
//ref.printItem();

class Encyclopedia extends ReferenceItem{
    constructor(title:string, year:number, public edition:number){
        super(title,year);
        this.edition = edition;
    }
    printItem():void{
        console.log(`${this.title} title was published in year ${this.year}, depart. ${ReferenceItem.department}, edition: ${this.edition}`);
    }
    printCitation():void{
       console.log(`${this.title} - ${this.year}`); 
    }
}
let refBook = new Encyclopedia("Enc", 2022, 12);
refBook.printItem();
refBook.printCitation();