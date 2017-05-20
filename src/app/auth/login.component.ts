import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";
import { User } from "./user.model";

@Component({
  selector: 'nl-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    constructor(private authService: AuthService) {}    

    onSubmit(form: NgForm) {
        const user = new User(
          form.value.username, 
          form.value.password
        );
        this.authService.login(user)
          .subscribe(
            data => console.log(data),
            error => console.log(error)
          );
        form.reset();
    }
    ngOnInit() {
    }
}
