import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonService} from '../model/common.service';

@Component({
  selector: 'app-show-count',
  templateUrl: './show-count.component.html',
  styleUrls: ['./show-count.component.css']
})
export class ShowCountComponent implements OnInit, OnDestroy {

  number = 0;

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
  }

  increment() {

    this.number += 1;
    this.commonService.counter$.next(+this.number);

  }

  decrement() {
    this.number -= 1;
    this.commonService.counter$.next(+this.number);
  }

  resetCount() {
    this.commonService.counter$.next(0);
  }

  ngOnDestroy() {
    this.commonService.counter$.unsubscribe();
  }
}
