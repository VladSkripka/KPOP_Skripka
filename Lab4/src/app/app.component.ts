import { Component } from '@angular/core';

type listItem =
{
    item:string,
    price:number
}
@Component({
    selector: 'app',
    templateUrl: './app.component.html',          
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    item:string="";
    price:string = '';
    mylistItem: listItem[] = [];
    i_count:number = 0;
    AddToList(i_name:string, i_price:string):void{
        this.item = i_name;
        this.price = i_price;
        var price = +this.price
        var myItem: listItem = {item:this.item,price:price}
        this.mylistItem.push(myItem)
    }
}
