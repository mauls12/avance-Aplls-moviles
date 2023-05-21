import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticate: boolean = false;

  constructor() { }

  isAuthenticated(): boolean {
    return this.isAuthenticated();
  }

  login(email: string, password:string): boolean {
    
    if(email === 'mauricio23@gmail.com' && password === 'dueñorestaurante'){
      this.isAuthenticate = true;
      return true;
    } else{
      this.isAuthenticate = false;
      return false;
    }
  
  }

  logout() {
    this.isAuthenticate = false;
  }
}
