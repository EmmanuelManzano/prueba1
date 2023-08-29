import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() show: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {

  }

  showCart(){
    this.show.emit();
  }
}
