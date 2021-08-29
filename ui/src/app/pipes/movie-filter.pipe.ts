import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieFilter',
  pure: false
})
export class MovieFilterPipe implements PipeTransform {

  transform(items: any[], query: string): any {
    if (!items || !query) {
      return items;
    }
    
    return items.filter(item => 
      item.synopsis && item.synopsis.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
      item.title && item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }

}