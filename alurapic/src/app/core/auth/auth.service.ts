import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { environment } from '../../../environments/environment';


const API_URL = environment.apiUrl;

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private userService: UserService) { }

  authenticate(userName: string, password: string) {
    /** parametro observe, serve para acessar parametros de resposta da requisição */
    return this.http.post(`${API_URL}/user/login`, { userName, password}, { observe: 'response'} )
    .pipe(tap(res => {
      const authToken = res.headers.get('x-access-token');
      this.userService.setToken(authToken);
    }));
  }

}
