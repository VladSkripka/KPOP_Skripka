import { Component } from '@angular/core';
     
@Component({
    selector: 'app-task8',
    template: `<label>Введіть слово: </label>
                 <input [(ngModel)]="num1" placeholder="num1"> <input [(ngModel)]="num2" placeholder="num2"><br>
                 <button (click)="GetMidAref(num1, num2)">Знайти</button> <label>Середнє арефметичне: </label> {{midAref}}<br>
                 <button (click)="GetMidGeom(num1, num2)">Знайти</button> <label>Середнє геометричне: </label> {{midGeof}}
                 `           
})
export class Task8Comp {
    num1 = ''
    num2 = ''
    midGeof:number = 0
    midAref:number = 0
    GetMidAref(one:string, two:string):void{
        this.num1 = one;
        this.num2 = two;
        var num1:number = +this.num1
        var num2:number = +this.num2
        this.midAref = (Math.pow(num1,3)+Math.pow(num2,3))/2
    }
    GetMidGeom(one:string, two:string):void{
        this.num1 = one;
        this.num2 = two;
        var num1:number = +this.num1
        var num2:number = +this.num2
        this.midGeof = Math.sqrt(Math.abs(num1)*Math.abs(num2))
    }
}