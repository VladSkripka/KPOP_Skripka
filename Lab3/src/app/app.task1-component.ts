import { Component } from '@angular/core';
     
@Component({
    selector: 'app-task1',
    template: `<label>Введіть числа: </label>
                 <input [(ngModel)]="num1" placeholder="num1">
                <input [(ngModel)]="num2" placeholder="num2">
                 {{GetSum(num1,num2)}}
                 <h1>Сума {{res}}</h1>
                 {{GetDiff(num1,num2)}}
                 <h1>Різниця {{res}}</h1>
                 {{GetMult(num1,num2)}}
                 <h1>Добуток {{res}}</h1>
                 `
                 
})
export class Task1Comp {
    res:number = 0
    num1:string =''
    num2:string =''
    GetSum(one_S:string, two_S:string):void{
        var one:number = +one_S
        var two:number = +two_S
        this.res = one + two
    }
    GetMult(one_S:string, two_S:string):void{
        var one:number = +one_S
        var two:number = +two_S
        this.res = one * two
    }
    GetDiff(one_S:string, two_S:string):void{
        var one:number = +one_S
        var two:number = +two_S
        this.res = one - two
    }
}
