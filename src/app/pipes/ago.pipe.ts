import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

moment.locale('fr');

@Pipe({
    name: 'TimeAgo',
})
export class AgoPipe implements PipeTransform {

    transform(value: any, ...args: any[]): any {
        let val: string = value.toString();
        if (value) {
          val = moment(value).fromNow();
        }
        return val;
    }

}
