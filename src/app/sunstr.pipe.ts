import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sunstr'
})
export class SunstrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
