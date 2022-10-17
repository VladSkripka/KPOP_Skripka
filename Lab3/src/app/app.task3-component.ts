import { Component } from '@angular/core';
     
@Component({
    selector: 'app-task3',
    template: `<label>Введіть шлях до картинки: </label>
                
                 <input [(ngModel)]="image" placeholder="image">
                 <img [src]="image" width="500">
                 `           
})
export class Task3Comp {
    image=''
}