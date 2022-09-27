var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
;
function getAllworkers() {
    var workers = new Array;
    workers =
        [
            { Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, id: 1 },
            { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, id: 2 },
            { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, id: 3 },
            { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, id: 4 }
        ];
    return workers;
}
function getWorkerByID(id) {
    var myWorker = { Name: " ", surname: " ", available: true, salary: 0, id: 0 };
    getAllworkers().forEach(function (item) { if (item.id == id) {
        myWorker = item;
    } });
    return myWorker;
}
function PrintWorker(curWorker) {
    console.log("".concat(curWorker.Name, " ").concat(curWorker.surname, " got salary ").concat(curWorker.salary));
}
PrintWorker(getWorkerByID(2));
var logPrize = {
    PrizeFunction: function (item) {
        console.log(item);
    }
};
logPrize.PrizeFunction("Sus");
var favoriteAuthor = {
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
var UniversityLabririan = /** @class */ (function () {
    function UniversityLabririan() {
        this.name = " ";
        this.email = this.name + "@u.net";
        this.department = "ITF";
    }
    UniversityLabririan.prototype.assistCustomer = function (custName) {
        console.log("".concat(this.name, " is assisting ").concat(custName));
    };
    ;
    return UniversityLabririan;
}());
var favoritelibririan = new UniversityLabririan;
favoritelibririan.name = "John";
favoritelibririan.assistCustomer("Vlad");
var ReferenceItem = /** @class */ (function () {
    /*title:string = " ";
    year:number = 0;
    constructor(newTitle: string, newYear:number){
        this.year = newYear;
        this.title = newTitle;
        console.log("Creating a new ReferenceItem ...");
    }*/
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        this._publisher = "";
        this.year = year;
        this.title = title;
    }
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher;
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: false,
        configurable: true
    });
    ReferenceItem.prototype.printItem = function () {
        console.log("".concat(this.title, " title was published in year ").concat(this.year, ", depart. ").concat(ReferenceItem.department));
    };
    ReferenceItem.department = "ITF";
    return ReferenceItem;
}());
//let ref = new ReferenceItem("WP", 2022);
//ref.publisher = "Another SUS"
//console.log(ref.publisher);
//ref.printItem();
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(title, year, edition) {
        var _this = _super.call(this, title, year) || this;
        _this.edition = edition;
        _this.edition = edition;
        return _this;
    }
    Encyclopedia.prototype.printItem = function () {
        console.log("".concat(this.title, " title was published in year ").concat(this.year, ", depart. ").concat(ReferenceItem.department, ", edition: ").concat(this.edition));
    };
    Encyclopedia.prototype.printCitation = function () {
        console.log("".concat(this.title, " - ").concat(this.year));
    };
    return Encyclopedia;
}(ReferenceItem));
var refBook = new Encyclopedia("Enc", 2022, 12);
refBook.printItem();
refBook.printCitation();
