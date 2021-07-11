import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name:'attachkey'
})

export class ObjectfilterPipe implements PipeTransform{
    transform(ob:any, objectkey:string){
    for (const key in ob) {
        //If the target object has any property at all
        if (ob.hasOwnProperty(key)) {
        //If the target object has the given property
            if (ob.hasOwnProperty(objectkey)) {
                return ob[objectkey]
            } else{                       
                return false
            }
        } else {
               return false
        }
      }             
   }
}