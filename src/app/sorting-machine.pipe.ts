import { Pipe, PipeTransform } from '@angular/core';
import { ListItem } from './second-page/second-page.component';
@Pipe({
  name: 'sortingMachine',
  standalone: true
})
export class SortingMachinePipe implements PipeTransform {

  transform(value: Array<ListItem>, sortCrit: string): Array<ListItem> {
    
  return (sortCrit==="desc")?(value.sort((a,b)=>(b.date.getTime()-a.date.getTime()))):(value.sort((a,b)=>(a.date.getTime()-b.date.getTime())));
  // (sortCrit==="fromYoungest")?
  // (value.sort((a,b)=>{a.date.getTime() - b.date.getTime()})):(value.filter((a,b)=>{b.date.getTime() - a.date.getTime()}));
  }

}
