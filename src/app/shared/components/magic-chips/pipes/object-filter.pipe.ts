import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'attachkey',
})
export class ObjectFilterPipe implements PipeTransform {
  transform(ob: any, objectKey: string) {
    for (const key in ob) {
      //If the target object has any property at all
      if (ob.hasOwnProperty(key)) {
        //If the target object has the given property
        if (ob.hasOwnProperty(objectKey)) {
          return ob[objectKey];
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
}
