import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonDataService} from '../common-data.service';

@Component({
  selector: 'app-common-operation',
  templateUrl: './common-operation.component.html',
  styleUrls: ['./common-operation.component.less']
})
export class CommonOperationComponent implements OnInit {
  // 标题
  @Input()
  title: string;

  // 品类筛选器
  @Input()
  category = '';
  @Output()
  categoryChange = new EventEmitter<any>();
  @Input()
  categoryList: OptionItem[];
  @Input()
  noCategory = false;
  @Input()
  hideCategoryAll = false;

  // 平台筛选器
  @Input()
  platform = '';
  @Output()
  platformChange = new EventEmitter<any>();
  @Input()
  platformList: OptionItem[];
  @Input()
  noPlatform = false;
  @Input()
  hidePlatformAll = false;

  @Output()
  exportData = new EventEmitter<any>();
  @Input()
  noExportData: boolean;

  @Output()
  chagned = new EventEmitter<any>();

  @Input()
  loading = false;

  constructor(private commonDataService: CommonDataService) {
  }

  async ngOnInit() {

    if (!this.noPlatform && !this.platformList) {
      this.platformList = (await this.commonDataService.getPlatformList()).data;
    }

    if (!this.noCategory && !this.categoryList) {
      this.categoryList = (await this.commonDataService.getCategoryList()).data;
    }
  }

  chagneFn(event: EventEmitter<any>, value) {
    event.emit(value);
    this.chagned.emit();
  }

}

