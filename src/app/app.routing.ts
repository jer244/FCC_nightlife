import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from "./landing/landing.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";

const APP_ROUTES: Routes = [
    {path: '', pathMatch: 'full', component: LandingComponent},
    {path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }
];
 
export const routing = RouterModule.forRoot(APP_ROUTES);