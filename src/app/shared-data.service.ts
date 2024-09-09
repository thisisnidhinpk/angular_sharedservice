import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  // Create a BehaviorSubject to store shared data
  private sharedData = new BehaviorSubject<string>('Initial Value');
  
  // Observable for components to subscribe to
  currentData = this.sharedData.asObservable();
  constructor() { }
    // Method to update the shared data
    updateData(newData: string) {
      this.sharedData.next(newData);
    }
  
    // Method to get the current value of the data
    getData(): string {
      return this.sharedData.getValue();
    }
}
