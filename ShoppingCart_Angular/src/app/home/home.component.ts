
import { Component, OnInit, Injectable } from '@angular/core';

import { AppComponent } from '../app.component';
import { Hospital } from '../models/hospitals';
import { User } from '../models/user';
import { UserService, HospitalService } from '../services';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
  currentUser: User;
    users: User[] = [];
    city: string;
    currCity: string;
    hospitals: Hospital[] = [];
    noHospitals = true;
  login = false;
  
    constructor(private userService: UserService,
                private hospitalService: HospitalService,
                 private router: Router,
               private app: AppComponent) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
      this.app.currUser = this.currentUser.firstname;
      this.app.login = true;
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe( (users) => this.loadExistingUsers(users) );
    }
  
  logout(){
     localStorage.removeItem('currentUser');
    this.app.currUser = '';
    this.app.login = false;
     this.router.navigate(['/login']);
  }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
  
  private loadExistingUsers(users: User[]) {
        this.users = users;
    }
  
  search(){
      this.hospitalService.getHospitalsByCity(this.city).subscribe((data) => { 
      this.hospitals = data;
        this.currCity = this.city;
    },
         err => { alert(err)}
 );
  }
}