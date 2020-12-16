import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // * the class is open for the bootstrap
  @HostBinding('class.open') open: boolean = false;

  @HostListener('click') toggleOpen() {
    this.open ? (this.open = false) : (this.open = true);
  }

  constructor(private elRef: ElementRef) {}
}
