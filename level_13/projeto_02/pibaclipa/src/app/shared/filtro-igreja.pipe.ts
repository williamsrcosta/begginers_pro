import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroIgreja'
})
export class FiltroIgrejaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;
    args = args.toLowerCase();
    return value.filter((data: any) => {
      return JSON.stringify(data).toLowerCase().includes(args);
    });
  }

}
