import { User } from '../models/user';
import { AuthenticationService, AlertService } from '../services';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpParams, HttpClient} from '@angular/common/http';

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    user: User = new User();
  
    loading = false;
    returnUrl: string;
    responseData: any;
  
    constructor(
      private httpClient: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      
      this.httpClient.get('http://localhost:8083/hospitals').subscribe((data) => {
      this.responseData = data;
    },
         err => { alert(err)}
 );
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.user)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error('Enter correct credentials OR Please Register to login..!!');
                    this.loading = false;
                });
    }
}
