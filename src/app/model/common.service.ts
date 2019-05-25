import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  counter$ = new Subject<number>();

  constructor() {

  }


}
