
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'camelCaseToSpace'})
export class CamelCaseToSpacePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/([A-Z])/g, ' $1').trim();
  }
}