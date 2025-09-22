import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class DataService {

  private dataSource = new BehaviorSubject<string>('Dato inicial');
  data$ = this.dataSource.asObservable();

  constructor() { }

  updateData(newData: string) {
    this.dataSource.next(newData);
  }
}
