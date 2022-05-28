import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'show-component',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  @Input() inCarousel: boolean | undefined;
  @Input() isExtra: boolean | undefined;
  @Input() isPopup: boolean | undefined;
  @Input() show: any;
  @Output() sendHovered = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  setHovered() {
    if (!this.inCarousel) {
      return;
    }
    this.sendHovered.emit(this.show);
  }

  showID() {
    return this.inCarousel ? this.show.title : 'is-popup';
  }

  clearHover() {
    if (!this.inCarousel) {
      return;
    }
    this.sendHovered.emit(null);
  }
}
