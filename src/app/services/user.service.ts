import { Injectable } from '@angular/core';
import { users } from '../interface/data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  private user: users[] = [{ id: 1, name: 'System Admin', username: 'sa', password: 'sa', phonenumber: 9543645878, email: 'systemadmin@123', role: 'Admin' },
  { id: 2, name: 'End user', username: 'eu', password: 'eu', phonenumber: 78777848445, email: 'enduser@123', role: 'User' }];


  signUp(user: any): void {
    this.user.push(user);
  }

  logIn(username: string, password: string): boolean {
    const user = this.user.find(u => u.username === username && u.password === password);
    if (user) {
      return true;
    }
    return false;
  }
}
