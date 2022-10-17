import { Component } from '@angular/core';
     
@Component({
    selector: 'app-task2',
    template: `<label>Введіть ім'я: </label>
                 <input [(ngModel)]="person" placeholder="person">

                 <button (click)="AddToList(person)">Save</button>
                 <table>
                 <thead>
                     <th>Name</th>
                 </thead>
                 <tbody>
                     <tr *ngFor="let name of people">
                         <td>{{name}}</td>
                     </tr>
                 </tbody>
                 </table>
                 `             
})
export class Task2Comp {
    person='';
    people:Array<string> = new Array;
    AddToList(per:string):void{
        per = this.person;
        this.people.push(per); 
    }
}