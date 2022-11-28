import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = ''
  city:string = ''
  adr:string = ''
  person: string = ''
  tnumber: string = ''
  email: string = ''
  nameOB:string = ''
  opal:boolean = false
  vent:boolean = false
  GVS:boolean  = false

  errInp1: string = ''
  errInp2: string = ''
  errInp3: string = ''
  errInp4: string = ''
  errInp5: string = ''
  errInp6: string = ''
  errInp7: string = ''
  errInp8: string = ''

  outRes: string = ''
  
  checkAllVal():boolean{
    let eRes1: number = 0;
    let eRes2: number = 0;
    let eRes3: number = 0;
    let eRes4: number = 0;
    let eRes5: number = 0;
    let eRes6: number = 0;
    let eRes7: number = 0;
    let eRes8: number = 0;

    this.errInp1 = ''
    this.errInp2 = ''
    this.errInp3 = ''
    this.errInp4 = ''
    this.errInp5 = ''
    this.errInp6 = ''
    this.errInp7 = ''
    this.errInp8 = ''

    let regexp1: string = '[\\А-Я].*'
    let str1: string = this.name;
    eRes1 = str1.search(regexp1)
    if (this.name == ''){
      eRes1 = -2
    }
    let regexp2: string = '[\\А-Я].*'
    let str2: string = this.city;
    eRes2 = str2.search(regexp2)
    if (this.city == ''){
      eRes2 = -3
    }
    let regexp3: string = '[\\А-Я].*[\\0-9].*[\\А-Я]'
    let str3: string = this.adr;
    eRes3 = str3.search(regexp3)
    if (this.adr == ''){
      eRes3 = -4
    }
    let regexp4: string = '[\\А-Я].*'
    let str4: string = this.person;
    eRes4 = str4.search(regexp4)
    if (this.person == ''){
      eRes4 = -5
    }

    let regexp5: string = '^[0-9]*$'
    let str5: string = this.tnumber;
    eRes5 = str5.search(regexp5)

    if(this.tnumber.length != 9){
      eRes5 = -6
    }
    if (this.tnumber == ''){
      eRes5 = -7
    }

    let regexp6: string = '[\\a-z].*@gmail\\.com'
    let str6: string = this.email;
    eRes6 = str6.search(regexp6)
    if (this.email == ''){
      eRes6 = -8
    }

    let regexp7: string = '[\\А-Я].*'
    let str7: string = this.nameOB;
    eRes7 = str7.search(regexp7)
    if (this.city == ''){
      eRes7 = -9
    }

    if(!this.opal && !this.vent && !this.GVS){
      eRes8 = -10
    }




    if(eRes1 ==0){
      if(eRes2 ==0){
        if(eRes3 ==0){
          if(eRes4 ==0){
            if(eRes5 ==0){
              if(eRes6 ==0){
                if(eRes7 ==0){
                  if(eRes8 ==0){
                    this.outRes = 'Відправлено'
                  }
                  else {
                    this.errInp8 = 'Оберіть область використання'
                  }
                }
                else if(eRes7 == -9){
                  this.errInp7 = 'Введіть дані'
                }
                else{
                  this.errInp7 ='Назва об`экту з маленької'
                }
              }
              else if(eRes6 == -8){
                this.errInp6 = 'Введіть дані'
              }
              else{
                this.errInp6 ='Email введено невірно (example@gmail.com)'
              }
            }
            else if(eRes5 == -6){
              this.errInp5 = 'Введено забагато або замало цифр (має бути 9)'
            }
            else if(eRes5 == -7){
              this.errInp5 = 'Введіть дані'
            }
            else{
              this.errInp5 ='Тільки цифри від 0 до 9'
            }
          }
          else if(eRes4 == -5){
            this.errInp4 = 'Введіть дані'
          }
          else{
            this.errInp4 ='Контактну особу введено з маленької'
          }
        }
        else if(eRes3 == -4){
          this.errInp3 = 'Введіть дані'
        }
        else{
          this.errInp3 ='Не правильно введено адресу (Антонова 1А)'
        }
      }
      else if(eRes2 == -3){
        this.errInp2 = 'Введіть дані'
      }
      else {
        this.errInp2 = 'Назва міста з маленької'
      }
    }
    else if(eRes1 == -2){
      this.errInp1 = 'Введіть дані'
    }
    else{
      this.errInp1 = 'Назва з маленької'
    }




    return true
  }
}
