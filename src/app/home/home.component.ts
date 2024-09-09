import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(
    private sharedDataService: SharedDataService,
    private router: Router
  ) {}
  sendData() {
    this.sharedDataService.updateData('Data from Component A');
    this.router.navigate(['/con']);
  }
}
