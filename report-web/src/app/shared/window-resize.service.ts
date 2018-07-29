import {EventEmitter, Injectable} from '@angular/core';
import {pull} from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class WindowResizeService {
  eventEmitters: EventEmitter<any>[] = [];

  constructor() {
  }

  subscribe(eventEmitter: EventEmitter<any>) {
    this.eventEmitters.push(eventEmitter);
  }

  unsubscribe(eventEmitter: EventEmitter<any>) {
    pull(this.eventEmitters, eventEmitter);
    eventEmitter.unsubscribe();
  }

  emit() {
    this.eventEmitters.forEach(e => e.emit());
  }
}
