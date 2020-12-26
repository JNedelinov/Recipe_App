import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.template.html',
  styles: [],
})
export class HeaderComponent {
  // title: string = 'The Header';
  // collapsed: boolean = true;

  // @Output() selectedLink = new EventEmitter<string>();

  constructor() {}

  // selectLink(link: string) {
  //   this.selectedLink.emit(link);
  // }
}
