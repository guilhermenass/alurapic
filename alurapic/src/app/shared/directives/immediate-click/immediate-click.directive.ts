
import { ElementRef, Directive, OnInit } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[immediateClick]'
})

export class ImmediateClickDirective implements OnInit {
    constructor(private element: ElementRef) {

    }

    ngOnInit() {
        this.element.nativeElement.click();
    }
}
