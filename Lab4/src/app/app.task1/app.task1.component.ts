import { Component, Input} from '@angular/core';
type listItem =
{
    item:string,
    price:number
}
@Component({
  selector: 'task1',
  template: ` 
              Всього: {{DoSum()}}{{sum}}`,
  styleUrls: ['./app.task1.component.css']
})
export class AppTask1Component {
  @Input() mylistItem: listItem[] = [];
  sum:number = 0
  DoSum(){
    var i:number = 0;
    this.sum = 0;
     for(i;i<this.mylistItem.length;i++){
         this.sum =this.sum+ this.mylistItem[i].price
     }
 }
}
