import { Component, OnInit } from '@angular/core';

import { ISchedule } from './schedule.interface'
import { Schedule } from './schedule.model';

@Component({
  selector: 'app-hw3',
  templateUrl: './hw3.component.html',
  styleUrls: ['./hw3.component.scss']
})
export class Hw3Component implements OnInit {
  schedules: Array<any> = [];
  nameOfTask: string;
  countTask: number;
  editStatus: boolean;
  editField: string;
  editIndex: number;

  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void {
    debugger;
    console.log(this.nameOfTask);
    if (this.nameOfTask == undefined || this.nameOfTask == ''){
      alert('Fill the input field');
    }
    else{
      const newTask: ISchedule = new Schedule(1, this.nameOfTask);
      if (this.schedules.length > 0){
        newTask.id = this.schedules.slice(-1)[0].id + 1;
      }
      this.schedules.push(newTask);
      this.nameOfTask = '';
      this.countTask = this.schedules.length;
    }
      

  }

  editTask(task: ISchedule) {
    const index = this.schedules.findIndex(elem => elem.id === task.id);
    this.editStatus = !task.edit;
    this.editField = task.taskName;
    this.editIndex = index;
  }

  saveTask(): void {
    this.schedules[this.editIndex].taskName = this.editField;
    this.editStatus = false;
  }

  deleteTask(index: number): void { 
    this.schedules.splice(index, 1);
    this.countTask--;
  }
}
