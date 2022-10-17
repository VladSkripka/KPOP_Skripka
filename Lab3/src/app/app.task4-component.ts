import { Component } from '@angular/core';
     
@Component({
    selector: 'app-task4',
    template: `<label>Введіть слово: </label>
                 <input [(ngModel)]="word" placeholder="word">
                 <button (click)="GetReverseWord(word)">Зміна</button><br>
                 <label>Слово у зворотньому порядку: </label> {{reverse}}
                 `           
})
export class Task4Comp {
    word=''
    reverse = ''
    GetReverseWord(myWord:string){
        var split = myWord.split("");
        split = split.reverse();
        this.reverse = split.join("");
    }
}