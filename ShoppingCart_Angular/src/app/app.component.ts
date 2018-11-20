import { Component } from '@angular/core';
import '../assets/app.css';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.css']
})

export class AppComponent { 
  constructor(){}
  
  login: boolean = false;
  currUser: string = '';
    
    logout(){
      localStorage.removeItem('currentUser');
    }
}