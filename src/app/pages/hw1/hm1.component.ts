import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-hm1',
  templateUrl: './hm1.component.html',
  styleUrls: ['./hm1.component.scss']
})
export class Hm1Component implements OnInit {
  badWord = '';
  allBadWords: string[] = ['java', 'pascal'];
  textField = '';
  inpRed = false;
  textRed = false;
  textPlacehold = 'text here...';
  inpPlacehold = 'word here...';
  constructor() { }

  ngOnInit(): void {
  }
  // ---------------------------------

  addWord(): void {
    if (this.badWord == '') {
      this.inpRed = true;
      this.inpPlacehold = 'Plese write a word!';
    }
    else {
      this.inpRed = false
      this.inpPlacehold = 'word here...';
      this.allBadWords.push(this.badWord);
      this.badWord = '';
    }

  }

  resetForm(): void {
    this.allBadWords = [];
    this.badWord = '';
    this.textField = '';
    this.inpRed = false;
    this.textRed = false;
    this.textPlacehold = 'text here...';
    this.inpPlacehold = 'word here...';
  }

  checkCenzore() {
    if (this.textField == '') {
      this.textRed = true;
      this.textPlacehold = 'Please write some text!'
    }
    else {
      this.textRed = false;
      this.textPlacehold = 'text here...';
      this.allBadWords.forEach(element => {
        let regExp = new RegExp(element, 'gi');
        let starCount = function (): string {
          let star: string = '';
          let i: number = 0;
          while (i < element.length) {
            star += '*';
            i++;
          }
          return star;
        }
        if (this.textField.toLowerCase().includes(element.toLowerCase())) {
          let newStr: string = this.textField;
          this.textField = newStr.replace(regExp, starCount());
        }
      });
    }
  }


}
