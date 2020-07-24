import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { OrderPipe } from 'ngx-order-pipe';

import { IPhoneNumber } from './phone-number.interface';
import { PhoneNumber } from './phone-number.module';

@Component({
  selector: 'app-hw4',
  templateUrl: './hw4.component.html',
  styleUrls: ['./hw4.component.scss']
})
export class Hw4Component implements OnInit {
  search: string;
  modalStatus: boolean = false;
  phoneEditIndex: number;

  newfName: string;
  newlName: string;
  newPhoneNumber: string;

  // order pipe
  order: string = 'info.name';
  reverse: boolean = false;

  // bootstrap modal
  modalRef: BsModalRef;

  phoneBook: Array<any> = [
    {
      fName: 'anina',
      lName: 'ivanova',
      phoneNumber: '0639999999'
    },
    {
      fName: 'sergiy',
      lName: 'steg',
      phoneNumber: '0637777777'
    },
    {
      fName: 'denys',
      lName: 'steg',
      phoneNumber: '0635555555'
    },
    {
      fName: 'oliver',
      lName: 'tvist',
      phoneNumber: '0632222222'
    },
    {
      fName: 'marko',
      lName: 'polo',
      phoneNumber: '0630000000'
    },
  ];

  sortedPhoneBook: Array<any> = [];

  constructor(private modalService: BsModalService, private orderPipe: OrderPipe) {
    this.sortedPhoneBook = orderPipe.transform(this.phoneBook, 'info.name');
    console.log(this.sortedPhoneBook);
   }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  setOrder(value: string): void {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
  
  addPhoneNumber(): void{
    const newPhone = new PhoneNumber(this.newfName, this.newlName, this.newPhoneNumber);
    this.phoneBook.push(newPhone);
    this.modalStatus = false;
    this.newfName = '';
    this.newlName = '';
    this.newPhoneNumber = '';
    this.modalRef.hide();
  }

  editPhone(template, phone: IPhoneNumber): void{
    let index = this.phoneBook.findIndex(elem => elem.phoneNumber === phone.phoneNumber);
    this.phoneEditIndex = index;
    this.modalStatus = true;
    this.newfName = phone.fName;
    this.newlName = phone.lName;
    this.newPhoneNumber = phone.phoneNumber;
    this.openModal(template);
  }

  deletePhone(phone: IPhoneNumber): void{
    let index = this.phoneBook.findIndex(elem => elem.phoneNumber === phone.phoneNumber);
    this.phoneBook.splice(index, 1);
  }

  savePhoneNumber(): void {
    const editPhone = new PhoneNumber(this.newfName, this.newlName, this.newPhoneNumber)
    this.phoneBook.splice(this.phoneEditIndex, 1, editPhone);
    this.modalRef.hide();
    this.modalStatus = false;
  }
 
}
