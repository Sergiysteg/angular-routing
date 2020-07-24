import { Component, OnInit } from '@angular/core';

import { IUser } from './user.interface';
import { User } from './user.model';

@Component({
  selector: 'app-hw2',
  templateUrl: './hw2.component.html',
  styleUrls: ['./hw2.component.scss']
})
export class Hw2Component implements OnInit {
  id: number;
  login: string;
  password: string;
  email: string;
  AddUserButton: boolean;
  editIndex: number;
  editStatus: boolean = false;
  allUsers: Array<IUser> = [];
  
  constructor() {

  }

  ngOnInit(): void{
  }

  addUser(): void{
    if (this.login == undefined || this.password == undefined || this.email == undefined){
      alert('Please fill all input fields');
    }
    else {
      const newUser: IUser = new User(1, this.login, this.password, this.email);
      if (this.allUsers.length > 0){
        newUser.id = this.allUsers.slice(-1)[0].id + 1;
      }
      this.allUsers.push(newUser);
      this.resetForm();
    }
  }

  resetForm(): void{
    this.login = '';
    this.password = '';
    this.email = '';
  }

  editUser(user: IUser): void {
    this.id = user.id;
    this.login = user.login;
    this.password = user.password;
    this.email = user.email;
    this.editStatus = true;
  }

  saveUser(): void{
    if (this.login == '' || this.password == '' || this.email == ''){
      alert('Please fill all input fields');
    }
    else {
      const editUser: IUser = new User(this.id, this.login, this.password, this.email);
      const index = this.allUsers.findIndex(elem => elem.id == editUser.id);
      this.allUsers.splice(index, 1, editUser);
      this.editStatus = false;
      this.resetForm();
    }
  }

  deleteUser(index: number): void{
    if (confirm('Are you shure?')){
      this.allUsers.splice(index, 1);
    }
  }


}
