import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonService} from '../model/common.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {

  counterSubscription: Subscription;
  counter = 0;

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.counterSubscription = this.commonService.counter$.subscribe(result => {
      this.counter = result;
    });
  }

  ngOnDestroy() {
    this.commonService.counter$.unsubscribe();
  }

}
