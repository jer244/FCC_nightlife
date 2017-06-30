import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";
import { User } from "./user.model";
import { Router } from "@angular/router";

@Component({
    selector: 'nl-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router) {}    

    onSubmit(form: NgForm) {
         const user = new User(
          form.value.username, 
          form.value.password
        );
        this.authService.signup(user)
            .subscribe(
                (data) => {
                    localStorage.setItem('token', data.token);
                    console.log(data);
                    console.log(localStorage.getItem('token'));
                    this.router.navigate(['/']);
                },
                error => console.log(error)
            );
        form.reset();
    }

    ngOnInit() {
    }
}