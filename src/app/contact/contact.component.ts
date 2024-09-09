import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  receivedData: string = '';

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    // Subscribe to the shared data
    this.sharedDataService.currentData.subscribe(data => {
      this.receivedData = data;
    });
  }
}
