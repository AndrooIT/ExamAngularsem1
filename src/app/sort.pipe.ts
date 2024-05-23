import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {
  transform(items: any[], order: string): any[] {
    if (!items || !order) {
      return items;
    }
    if (order === 'asc') {
      return items.sort((a, b) => a.score - b.score);
    } else if (order === 'desc') {
      return items.sort((a, b) => b.score - a.score);
    }
    return items;
  }
}
