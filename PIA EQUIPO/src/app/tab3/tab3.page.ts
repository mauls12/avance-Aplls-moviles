import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import { Subscription} from 'rxjs';




@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  email: string="";
  password: string="";

  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn = false;

  login() {
    this.isLoggedIn = this.authService.login(this.email, this.password);
    if (this.isLoggedIn) {
      this.router.navigate(['/tabs/tab2']);
    } else {
    }
  }
  
  
  

  logout() {
    this.isLoggedIn = false;
    this.authService.logout();
    
  }
}
