import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertVisibleSubject = new BehaviorSubject<boolean>(false);

  get alertVisible$() {
    return this.alertVisibleSubject.asObservable();
  }

  showAlert() {
    this.alertVisibleSubject.next(true);
    setTimeout(() => {
      this.alertVisibleSubject.next(false);
    }, 1000); // Hide after 1 seconds
  }
}
