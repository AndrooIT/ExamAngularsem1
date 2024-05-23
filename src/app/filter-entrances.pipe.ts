import { Pipe, PipeTransform } from '@angular/core';
import { ListItem } from './game-controler.service'


@Pipe({
  name: 'filterEntrances',
  standalone: true
})
export class FilterEntrancesPipe implements PipeTransform {

  transform(value: Array<ListItem>, event: string): Array<ListItem> {
    
    return (event==="")?(value):(value.filter((item)=>{return item.ev === event}));
  }

}
