import { User } from '../models/user';
import { UserService, AlertService } from '../services';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    user: User =  new User();
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.create(this.user)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful',true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
