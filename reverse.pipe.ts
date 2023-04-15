import { Pipe, PipeTransform } from '@angular/core';
import { AnyARecord } from 'dns';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
name1:string='';
  transform(value: any, ...args: unknown[]): unknown {
    this.name1=value.split('').reverse().join('');     //revrese our string 
    return this.name1;
  }

}
