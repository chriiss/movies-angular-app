import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iterateObject'
})
export class IterateObjectPipe implements PipeTransform {
  transform(dict: Object) {
    return Object.keys(dict).map(key => ({key, val: dict[key]}));
  }
}
