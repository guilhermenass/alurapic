import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';
import { userNamePasswordValidator } from './username-password.validator';

@Component({
    templateUrl: './signup.component.html',
    providers: [UserNotTakenValidatorService]
})
export class SignupComponent implements OnInit {

    signUpForm: FormGroup;
    @ViewChild('inputEmail') inputEmail: ElementRef;

    constructor(private formBuilder: FormBuilder,
                private signUpService: SignUpService,
                private router: Router,
                private userNotTakenValidatorService: UserNotTakenValidatorService) {}

    ngOnInit(): void {
        this.signUpForm = this.formBuilder.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            userName: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(30),
                    Validators.pattern(/^[a-z0-9_\-]+$/)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            fullName: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        },
        {
            validator: userNamePasswordValidator
        });
        this.inputEmail.nativeElement.focus();
    }

    signUp() {
        const newUser = this.signUpForm.getRawValue() as NewUser;
        this.signUpService
            .signUp(newUser)
            .subscribe(
                () => this.router.navigate(['']),
                error => console.log(error)
            );
    }
}
