import { Pipe, PipeTransform } from '@angular/core';
import {
  TGenericKeyValueObject,
  TGenericObjectKeyType,
} from '../../../../shared/types/generics.type';

@Pipe({
  name: 'objectKey',
})
export class ObjectKeyPipe implements PipeTransform {
  transform(
    objectToCheck: TGenericKeyValueObject<TGenericObjectKeyType, any>,
    objectKey: TGenericObjectKeyType
  ) {
    for (const key in objectToCheck) {
      if (objectToCheck.hasOwnProperty(objectKey)) {
        return objectToCheck[objectKey];
      } else {
        return false;
      }
    }
    //The object doesn't have keys
    return false;
  }
}
