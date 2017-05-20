import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";
import { User } from "./user.model";

@Component({
    selector: 'nl-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

    constructor(private authService: AuthService) {}    

    onSubmit(form: NgForm) {
      this.authService.signup(form.value.username, form.value.password)
          .subscribe(
            data => console.log(data),
            error => console.log(error)
          );
        form.reset();
    }

    ngOnInit() {
    }
}