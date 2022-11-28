import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { Users } from './model/Users';
import { Storage } from '@ionic/storage-angular';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:HttpClient, public dialog: MatDialog, private storage:Storage){}
  myUsers:Users[] = [];
  favourites: Users[] = [];
  favStored:Users[] = [];
  
  ngOnInit(): void {
    this.storage.create()
    let headers = new HttpHeaders({})
    this.http.get<any>('https://randomuser.me/api/?results=50', {
      headers:headers
    }).subscribe(data =>{
      for (let i = 0; i<data.results.length; i++) {
        var item:Users = {
        id:i,
        gender: data.results[i].gender,
        name:data.results[i].name.title +" "+data.results[i].name.first+" "+data.results[i].name.last, 
        location:data.results[i].location.street.number+", "+data.results[i].location.street.name+", "+data.results[i].location.city+", "+data.results[i].location.country,
        email:data.results[i].email,
        login:data.results[i].login.username,
        loginFul:data.results[i].login.uuid + ", username: " +data.results[i].login.username+", password: "+data.results[i].login.password+", salt: "+data.results[i].login.salt,
        password:data.results[i].login.password,
        dob:data.results[i].dob.date + ", age "+data.results[i].dob.age,
        phone:data.results[i].phone,
        cell:data.results[i].cell,
        ip:data.results[i].id.name+", value "+data.results[i].id.value
      }
        this.myUsers.push(item)
      }
    })
  }
  openDialog(index:number) {
      const popUp = this.dialog.open(DialogContentComponent, {data:this.myUsers[index]});
      popUp.afterClosed().subscribe(item => {
        this.storage.set('name', [...this.favStored,item])
      })
      
  }
  ShowFS(){
    //for (let i=0; i<=2; i++){this.storage.get('name').then((name)=>console.log(name));}
    this.storage.forEach((v)=>{
      console.log(v);
      this.favStored = v;
    })
  }
  ClearFS(){
    this.storage.clear()
  }
}
