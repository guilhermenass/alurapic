import { Directive, Renderer, ElementRef, OnInit } from '@angular/core';
import { UserService } from '../../../core/user/user.service';

@Directive({
    selector: '[appShowIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

    constructor(
        private element: ElementRef,
        private renderer: Renderer,
        private userService: UserService
        ) {}

    ngOnInit(): void {
       if (!this.userService.isLogged()) {
        this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
       }
    }
}
