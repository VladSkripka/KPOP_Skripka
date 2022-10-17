import { Component, Type } from '@angular/core';
type listItem =
{
    item:string,
    price:number
}
@Component({
    selector: 'app-task10',
    template: `<label>Введіть ім'я: </label>
                 <input [(ngModel)]="item" placeholder="item"> <input [(ngModel)]="price" placeholder="price">

                 <button (click)="AddToList(item, price); DoSum()">Save</button>
                 <table>
                 <thead>
                     <th>Name</th>
                     <th>Price</th>
                 </thead>
                 <tbody>
                     <tr *ngFor="let item of mylistItem">
                         <td>{{item.item}}</td>
                         <td>{{item.price}}</td>
                     </tr>
                 </tbody>
                 </table>

                 Всього: {{sum}}
                 `             
})
export class Task10Comp {
    
    item:string="";
    price:string = '';
    mylistItem: listItem[] = [];
    sum:number = 0
    i_count:number = 0;
    AddToList(i_name:string, i_price:string):void{
        this.item = i_name;
        this.price = i_price;
        var price = +this.price
        var myItem: listItem = {item:this.item,price:price}
        this.mylistItem.push(myItem)

    }
    DoSum(){
       var i:number = 0;
       this.sum = 0;
        for(i;i<this.mylistItem.length;i++){
            this.sum =this.sum+ this.mylistItem[i].price
        }
    }
}