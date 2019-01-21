import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  fromUrl: string;
  @ViewChild('userNameInput') userNameInput: ElementRef;

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {

    /** Pegar a url que o usuário tentou acessar sem estar logado. Quando o usuário logar, vai redirecionar para essa url */
    this.activatedRoute.queryParams.subscribe(params => this.fromUrl = params['fromUrl']);

    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.userNameInput.nativeElement.focus();
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(userName, password)
      .subscribe(
        () => {
          if (this.fromUrl) {
            this.router.navigateByUrl(this.fromUrl);
          } else {
            this.router.navigate(['user', userName]);
          }
        },
        (error) => console.log(error));
        this.loginForm.reset();
        this.userNameInput.nativeElement.focus();
  }
}
