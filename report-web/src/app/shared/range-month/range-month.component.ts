import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {SimpleChanges} from '@angular/core/src/metadata/lifecycle_hooks';
import {SimpleChange} from '@angular/core/src/change_detection/change_detection_util';
import * as moment from 'moment';
import {WindowResizeService} from '../window-resize.service';

@Component({
  selector: 'app-range-month',
  templateUrl: './range-month.component.html',
  styleUrls: ['./range-month.component.less']
})
export class RangeMonthComponent implements OnInit, OnChanges {
  @Input()
  dates: Date[];

  @Output()
  datesChange = new EventEmitter<any>();

  startValue: Date = null;
  endValue: Date = null;
  startOpen = false;
  endOpen = false;

  disabledEndDate: (endValue: Date) => boolean;

  constructor(private windowResizeService: WindowResizeService) {
  }


  ngOnInit() {
    if (!this.dates || !this.dates.length) {
      this.setPrevMonth(); // 默认设置上一个月
    }
    this.disabledEndDate = (endValue: Date) => {
      if (!endValue || !this.startValue) {
        return false;
      }
      return moment(endValue).isBefore(this.startValue, 'month');
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    const change: SimpleChange = changes['dates'];
    const dates: Date[] = change.currentValue;
    if (dates && dates.length) {
      [this.startValue, this.endValue] = dates;
    }
  }

  openPicker() {
    this.startOpen = true;
  }

  onStartChange(date: Date): void {
    this.startValue = date;
    this.startOpen = false;
  }

  onEndChange(date: Date): void {
    this.endValue = date;
    this.endOpen = false;
  }

  handleStartOpenChange(open: boolean): void {
    if (!open && this.startValue) {
      this.endOpen = true;
      setTimeout(() => {
        this.windowResizeService.dispatch();
      });
    }
  }

  handleEndOpenChange(open: boolean): void {
    this.endOpen = open;

    this.dates = [this.startValue, this.endValue];
    this.datesChange.emit(this.dates);
  }

  closeAllPicker() {
    this.startOpen = false;
    this.endOpen = false;
    if (this.dates) {
      this.startValue = this.dates[0];
      this.endValue = this.dates[1];
    }
  }

  setPrevMonth() {
    const m = moment();
    m.add(-1, 'month');

    this.startValue = m.toDate();
    this.endValue = m.toDate();

    this.handleEndOpenChange(false);
  }

  setAllYear() {
    const m = moment();
    if (m.get('month')) {
      // month计数是从0-11，若month不为0，则可以计算上一个月，否则一月份无法再次减去一个月份了
      m.add(-1, 'month');
    }

    this.endValue = m.toDate();

    m.set('month', 0);
    this.startValue = m.toDate();

    this.handleEndOpenChange(false);
  }

}
