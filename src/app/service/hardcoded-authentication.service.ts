import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  authenticate(username:string,password:string){
    if(username==="admin" && password==="admin123"){
      sessionStorage.setItem("authenticateduser",username);
      return true;
    }
    return false;
  }

  constructor() { }


  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateduser');
    return !(user==null);
  }

  logout(){
    sessionStorage.removeItem('authenticateduser');
  }
}
