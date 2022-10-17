import { Component } from '@angular/core';
     
@Component({
    selector: 'app-task5',
    template: `<label>Введіть коєфіцієнти рівняння: </label>
                 <input [(ngModel)]="a" placeholder="a">x^2 + <input [(ngModel)]="b" placeholder="b">x + <input [(ngModel)]="c" placeholder="c"> = 0
                 <button (click)="GetRoots(a, b, c)">Знайти корені</button><br>
                <table>
                 <thead>
                     <th><label>Корені рівняння: </label></th>
                 </thead>
                 <tbody>
                     <tr *ngFor="let root of roots">
                         <td>{{root}}</td>
                     </tr>
                 </tbody>
                 </table>
                 `           
})
export class Task5Comp {
    a=''
    b = ''
    c = ''
    roots:Array<number>= new Array<number>;
    GetRoots(a:string, b:string, c:string):void{
        this.a =a
        this.b =b
        this.c =c
        var a1:number = +this.a;
        var b1:number = +this.b;
        var c1:number = +this.c;
        if(a1!=0 && b1!=0 && c1!=0){ 
            var D = Math.pow(b1,2)-4*a1*c1
            if(D>0){ this.roots[0] = (-b1+Math.sqrt(D))/(2*a1); this.roots[1] = (-b1-Math.sqrt(D))/(2*a1);}
            else if(D==0){this.roots[0] = (-b1)/(2*a1)}
            else{this.roots[0] = 0}
        }
        else if(a1==0){this.roots[0] = -c1/b1}
        else if(b1==0){this.roots[0]=Math.sqrt(-c1), this.roots[1]=-Math.sqrt(-c1)}
        else if(c1==0){this.roots[0]=0; this.roots[1]= -b1}
        else{this.roots[0]=0}
    }
}