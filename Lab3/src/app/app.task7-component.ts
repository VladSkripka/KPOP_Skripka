import { Component } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
     
@Component({
    selector: 'app-task7',
    template: `<label>Введіть слово: </label>
                 <input [(ngModel)]="rad" placeholder="rad"><br>
                 <button (click)="GetLength(rad)">Знайти довжину</button> <label> Довжина кола: </label> {{L}}<br>
                 <button (click)="GetS(rad)">Знайти площу</button> <label> Площа кола: </label> {{S}}<br>
                 <button (click)="GetV(rad)">Знайти об'єм</button> <label> Об'єм кулі: </label> {{V}}<br>
                 `           
})
export class Task7Comp {
    rad = ''
    L:number = 0;
    S:number = 0;
    V:number = 0;
    GetLength(R:string):void{
        this.rad = R
        var rad:number = +this.rad
        this.L = 2 * Math.PI * rad;
    }
    GetS(R:string):void{
        this.rad = R
        var rad:number = +this.rad
        this.S = Math.PI * Math.pow(rad,2);
    }
    GetV(R:string):void{
        this.rad = R
        var rad:number = +this.rad;
        this.V = (4/3)*Math.PI*Math.pow(rad,3)
    }
}