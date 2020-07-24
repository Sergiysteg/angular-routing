import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneSearch',
  pure: false
})
export class PhoneSearchPipe implements PipeTransform {

  transform(value: Array<any>, searchParam: string): Array<any> {
    if (!searchParam) {
      return value;
    }
    if (!value) {
      return null;
    }
    return value.filter(function(phone) {
      for (const key in phone) {
        if (phone[key].toLowerCase().includes(searchParam.toLowerCase())){
          return phone;
        }
      }
    })
  }

}
