import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
}) 
export class CarouselComponent implements OnInit {
  @ViewChild('widgetsContent') widgetsContent: ElementRef;
  @Input() genre: string;
  @Input() genreSection: any;
  hovered: any;
  constructor() { }

  ngOnInit(): void {}

  goToSection(section: string, oldSection: string) {
    document.getElementById(`${section}-${this.genre}`)?.classList.remove('hidden-sections');
    document.getElementById(`${oldSection}-${this.genre}`)?.classList.add('hidden-sections');
  }
  
  scrollLeft() {
    document.getElementById(`${this.genre}-content`)!.scrollLeft -= 500;
  }

  scrollRight() {
    document.getElementById(`${this.genre}-content`)!.scrollLeft += 500;
  }

  passHovered(event: any) {
    if (event) {
      const positions = document.getElementById(`${event.title}`)!.getBoundingClientRect();
      setTimeout(()=> {
        if (document.getElementById('is-popup')) {
          document.getElementById('is-popup')!.style.left = `${positions.left-100}px`;
          document.getElementById('is-popup')!.style.opacity = '1';
          const popupPosition = document.getElementById('is-popup')!.getBoundingClientRect();
          if (popupPosition.x < 0) {
            document.getElementById('is-popup')!.style.left = `${positions.left}px`;
          }
          if ((popupPosition.x + popupPosition.width) > window.innerWidth) {
            document.getElementById('is-popup')!.style.left = `${positions.left-350}px`;
          }
        }
      });
    }
    this.hovered = event;
  }
}
