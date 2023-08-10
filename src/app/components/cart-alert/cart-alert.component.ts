import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-cart-alert',
  templateUrl: './cart-alert.component.html',
  styleUrls: ['./cart-alert.component.css']
})
export class CartAlertComponent implements OnInit {
  showAlert: boolean = false;
  alertClass: string = 'hide'; // Initialize with 'hide' class

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.alertVisible$.subscribe((visible) => {
      this.showAlert = visible;
      this.alertClass = visible ? 'show' : 'hide';
    });
  }
}
