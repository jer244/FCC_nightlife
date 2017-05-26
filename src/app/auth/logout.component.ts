import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  selector: 'nl-logout',
  template: `
   <div class="col-md-8 col-md-offset-2">
    <form (ngSubmit)="onLogout()">
        <button
                class="btn btn-primary"
                type="submit">Submit</button>
    </form>
</div>  `,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
