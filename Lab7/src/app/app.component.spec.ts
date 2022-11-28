import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComp:AppComponent
  beforeEach(async () => {
    appComp = new AppComponent
  });
  //1
  it('має створити екземпляр класу', () => {
    expect(appComp).toBeTruthy();
  });
  //2
  it('перевірка поля Назва на відсутність даних', () => {
    appComp.name = ''
    appComp.checkAllVal()
    let errMsg = appComp.errInp1
    expect(errMsg).toEqual('Введіть дані');
  });
  //3
  it('перевірка поля Назва на коректність запису', () => {
    appComp.name = 'Влад'
    appComp.checkAllVal()
    let errMsg = appComp.errInp1
    expect(errMsg).toEqual('');
  });
  //4
  it('перевірка поля Місто на відсутність даних', () => {
    appComp.name = 'Влад'
    appComp.city = ''
    appComp.checkAllVal()
    let errMsg = appComp.errInp2
    expect(errMsg).toEqual('Введіть дані');
  });
  //5
  it('перевірка поля Місто на коректність запису', () => {
    appComp.name = 'Влад'
    appComp.city = 'Херсон'
    appComp.checkAllVal()
    let errMsg = appComp.errInp2
    expect(errMsg).toEqual('');
  });
  //6
  it('перевірка поля Адреса на відсутність даних', () => {
    appComp.name = 'Влад'
    appComp.city = 'Херсон'
    appComp.adr = ''
    appComp.checkAllVal()
    let errMsg = appComp.errInp3
    expect(errMsg).toEqual('Введіть дані');
  });
  //7
  it('перевірка поля Адреса на коректність запису', () => {
    appComp.name = 'Влад'
    appComp.city = 'Херсон'
    appComp.adr = 'Верхня 27В'
    appComp.checkAllVal()
    let errMsg = appComp.errInp3
    expect(errMsg).toEqual('');
  });
  //8
  it('перевірка поля Контактна особа на відсутність даних', () => {
    appComp.name = 'Влад'
    appComp.city = 'Херсон'
    appComp.adr = 'Верхня 27В'
    appComp.person = ''
    appComp.checkAllVal()
    let errMsg = appComp.errInp4
    expect(errMsg).toEqual('Введіть дані');
  });
  //9
  it('перевірка поля Контактна особа на коректність запису', () => {
    appComp.name = 'Влад'
    appComp.city = 'Херсон'
    appComp.adr = 'Верхня 27В'
    appComp.person = 'Влад'
    appComp.checkAllVal()
    let errMsg = appComp.errInp4
    expect(errMsg).toEqual('');
  });
  //10
  it('перевірка поля Телефон на відсутність даних', () => {
    appComp.name = 'Влад'
    appComp.city = 'Херсон'
    appComp.adr = 'Верхня 27В'
    appComp.person = 'Влад'
    appComp.tnumber = ''
    appComp.checkAllVal()
    let errMsg = appComp.errInp5
    expect(errMsg).toEqual('Введіть дані');
  });
  //11
  it('перевірка поля Телефон на замалу кількість знаків', () => {
    appComp.name = 'Влад'
    appComp.city = 'Херсон'
    appComp.adr = 'Верхня 27В'
    appComp.person = 'Влад'
    appComp.tnumber = '0000'
    appComp.checkAllVal()
    let errMsg = appComp.errInp5
    expect(errMsg).toEqual('Введено забагато або замало цифр (має бути 9)');
  });
  //12
  it('перевірка поля Телефон на завелику кількість знаків', () => {
    appComp.name = 'Влад'
    appComp.city = 'Херсон'
    appComp.adr = 'Верхня 27В'
    appComp.person = 'Влад'
    appComp.tnumber = '0000000000'
    appComp.checkAllVal()
    let errMsg = appComp.errInp5
    expect(errMsg).toEqual('Введено забагато або замало цифр (має бути 9)');
  });
  //13
  it('перевірка поля Телефон на коректність запису', () => {
    appComp.name = 'Влад'
    appComp.city = 'Херсон'
    appComp.adr = 'Верхня 27В'
    appComp.person = 'Влад'
    appComp.tnumber = '000000000'
    appComp.checkAllVal()
    let errMsg = appComp.errInp5
    expect(errMsg).toEqual('');
  });
  //14
  it('перевірка поля Email на некоректність запису', () => {
    appComp.name = 'Влад'
    appComp.city = 'Херсон'
    appComp.adr = 'Верхня 27В'
    appComp.person = 'Влад'
    appComp.tnumber = '000000000'
    appComp.email = 'апаово00'
    appComp.checkAllVal()
    let errMsg = appComp.errInp6
    expect(errMsg).toEqual('Email введено невірно (example@gmail.com)');
  });
  //15
  it('перевірка поля Email на відсутність даних', () => {
    appComp.name = 'Влад'
    appComp.city = 'Херсон'
    appComp.adr = 'Верхня 27В'
    appComp.person = 'Влад'
    appComp.tnumber = '000000000'
    appComp.email = ''
    appComp.checkAllVal()
    let errMsg = appComp.errInp6
    expect(errMsg).toEqual('Введіть дані');
  });
  //16
  it('перевірка поля Email на коректність даних', () => {
    appComp.name = 'Влад'
    appComp.city = 'Херсон'
    appComp.adr = 'Верхня 27В'
    appComp.person = 'Влад'
    appComp.tnumber = '000000000'
    appComp.email = 'example@gmail.com'
    appComp.checkAllVal()
    let errMsg = appComp.errInp6
    expect(errMsg).toEqual('');
  });
  //17
  it('перевірка поля НазваОБ на коректність даних', () => {
    appComp.name = 'Влад'
    appComp.city = 'Херсон'
    appComp.adr = 'Верхня 27В'
    appComp.person = 'Влад'
    appComp.tnumber = '000000000'
    appComp.email = 'example@gmail.com'
    appComp.nameOB = 'Вантаж'
    appComp.checkAllVal()
    let errMsg = appComp.errInp7
    expect(errMsg).toEqual('');
  });
  //18
  it('перевірка поля НазваОБ на некоректність запису', () => {
    appComp.name = 'Влад'
    appComp.city = 'Херсон'
    appComp.adr = 'Верхня 27В'
    appComp.person = 'Влад'
    appComp.tnumber = '000000000'
    appComp.email = 'example@gmail.com'
    appComp.nameOB = 'вантаж'
    appComp.checkAllVal()
    let errMsg = appComp.errInp7
    expect(errMsg).toEqual('Назва об`экту з маленької');
  });
  //19
  it('перевірка поля Область використання ПТО на необрання жодного варіанту', () => {
    appComp.name = 'Влад'
    appComp.city = 'Херсон'
    appComp.adr = 'Верхня 27В'
    appComp.person = 'Влад'
    appComp.tnumber = '000000000'
    appComp.email = 'example@gmail.com'
    appComp.nameOB = 'Вантаж'
    appComp.opal = false
    appComp.GVS = false
    appComp.vent = false
    appComp.checkAllVal()
    let errMsg = appComp.errInp8
    expect(errMsg).toEqual('Оберіть область використання');
  });
  //20
  it('перевірка поля Область використання ПТО на одного з усіх можливих варіантів', () => {
    appComp.name = 'Влад'
    appComp.city = 'Херсон'
    appComp.adr = 'Верхня 27В'
    appComp.person = 'Влад'
    appComp.tnumber = '000000000'
    appComp.email = 'example@gmail.com'
    appComp.nameOB = 'Вантаж'
    appComp.opal = true
    appComp.checkAllVal()
    let errMsg = appComp.errInp8
    expect(errMsg).toEqual('');
  });
});
