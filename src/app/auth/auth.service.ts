import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { User } from "./user.model";

@Injectable()
export class AuthService {
    constructor(private http: Http) {}
 
    signup(username: string, password: string) {
        const body = JSON.stringify({'username': username, 'password': password});
        const headers = new Headers({'Content-Type': "application/json"});
        return this.http.post('http://localhost:3000/user/signup', body, {headers: headers})
            //a.map((response: Response) => response.json());
            //.catch((error: Response) => Observable.throw("Error in Signup"));
    }
    
    login(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': "application/json"});
        return this.http.post('http://localhost:3000/user/login', body, {headers: headers})
            .map((response: Response) => response.json());
            //.catch((error: Response) => Observable.throw("Fuck ME!!!"));
    }
}