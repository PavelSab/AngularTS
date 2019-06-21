import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class PhonePipe implements PipeTransform {
  transform(value: string) {
   
      let str = value.split(" ");
      let arr = value.split("");
      arr.splice(0, 0, "(")
      arr.splice(3, 0, ") ")
      arr.splice(7, 0, "-")
      arr.splice(10, 0, "-")
      let str1 = arr.join("");
      return str1;
    
  }
}