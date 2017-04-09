import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args === undefined)return value;

    console.log(value.title);

    return value.filter((value)=>{
      var s:string ="";
      s += value.date;
      s += value.title;
      s += value.value;
      return s.toLowerCase().includes(args.toLowerCase());
    })
  }
}
